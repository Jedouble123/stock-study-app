import { useState } from 'react';
import { CHAPTERS } from './data/chapters';
import ChapterMapPage from './pages/ChapterMapPage';
import LearnPage from './pages/LearnPage';
import QuizPage from './pages/QuizPage';
import GlossaryPage from './pages/GlossaryPage';
import { sounds } from './utils/sounds';
import './styles/global.css';

const FIRST_CHAPTER_ID = CHAPTERS[0].id;
const XP_PER_CHAPTER = 100;

function useChapterProgress() {
  const load = () => {
    try {
      const saved = JSON.parse(localStorage.getItem('chapterProgress') ?? 'null');
      if (saved) return {
        completedChapters: new Set(saved.completedChapters),
        unlockedChapters: new Set(saved.unlockedChapters),
      };
    } catch { /* ignore */ }
    return {
      completedChapters: new Set(),
      unlockedChapters: new Set([FIRST_CHAPTER_ID]),
    };
  };

  const [progress, setProgress] = useState(load);

  const save = (next) => {
    localStorage.setItem('chapterProgress', JSON.stringify({
      completedChapters: [...next.completedChapters],
      unlockedChapters: [...next.unlockedChapters],
    }));
    setProgress(next);
  };

  const completeChapter = (chapterId) => {
    const idx = CHAPTERS.findIndex((c) => c.id === chapterId);
    const nextChapter = CHAPTERS[idx + 1];
    save({
      completedChapters: new Set([...progress.completedChapters, chapterId]),
      unlockedChapters: new Set([
        ...progress.unlockedChapters,
        ...(nextChapter ? [nextChapter.id] : []),
      ]),
    });
  };

  return [progress, completeChapter];
}

export default function App() {
  const [screen, setScreen] = useState('map');
  const [activeChapterId, setActiveChapterId] = useState(null);
  const [tab, setTab] = useState('learn');
  const [progress, completeChapter] = useChapterProgress();
  const [soundMuted, setSoundMuted] = useState(sounds.muted);

  const activeChapter = CHAPTERS.find((c) => c.id === activeChapterId);
  const xp = progress.completedChapters.size * XP_PER_CHAPTER;

  const toggleSound = () => {
    const next = !soundMuted;
    sounds.setMuted(next);
    setSoundMuted(next);
  };

  const goToMap = () => { setScreen('map'); setActiveChapterId(null); };

  const startChapter = (id) => {
    sounds.startBGM();
    setActiveChapterId(id);
    setScreen('learn');
  };

  const startQuiz = () => {
    sounds.stopBGM();
    setScreen('quiz');
  };

  const handleQuizComplete = () => {
    const idx = CHAPTERS.findIndex((c) => c.id === activeChapterId);
    if (idx < CHAPTERS.length - 1) sounds.unlock();
    completeChapter(activeChapterId);
    goToMap();
  };

  const handleQuizRetry = () => {
    sounds.startBGM();
    setScreen('learn');
  };

  if (screen === 'learn' && activeChapter)
    return <LearnPage chapter={activeChapter} onStartQuiz={startQuiz} onBack={goToMap} />;
  if (screen === 'quiz' && activeChapter)
    return <QuizPage chapter={activeChapter} onComplete={handleQuizComplete} onRetry={handleQuizRetry} onBack={() => setScreen('learn')} />;

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__inner">
          <div className="app-logo">
            <span className="app-logo__icon">📈</span>
            <span className="app-logo__title">주식 공부</span>
          </div>

          {xp > 0 && (
            <div className="header-xp">⚡ {xp} XP</div>
          )}

          <nav className="app-nav">
            <button className={`nav-tab ${tab === 'learn' ? 'nav-tab--active' : ''}`} onClick={() => { sounds.click(); setTab('learn'); }}>
              🗺️ 챕터
            </button>
            <button className={`nav-tab ${tab === 'glossary' ? 'nav-tab--active' : ''}`} onClick={() => { sounds.click(); setTab('glossary'); }}>
              📖 단어장
            </button>
          </nav>

          <button className="sound-toggle" onClick={toggleSound} title={soundMuted ? '소리 켜기' : '소리 끄기'}>
            {soundMuted ? '🔇' : '🔊'}
          </button>
        </div>
      </header>

      <main className="app-main">
        {tab === 'learn'
          ? <ChapterMapPage progress={progress} onStartChapter={startChapter} />
          : <GlossaryPage />}
      </main>
    </div>
  );
}
