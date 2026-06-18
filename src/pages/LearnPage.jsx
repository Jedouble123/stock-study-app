import { useState, useEffect } from 'react';
import { TERMS } from '../data/glossary';
import StoryViewer from '../components/StoryViewer';
import { sounds } from '../utils/sounds';
import './LearnPage.css';

const termById = Object.fromEntries(TERMS.map((t) => [t.id, t]));

/* ── Intro slide (unchanged) ─────────────────────── */
function IntroSlide({ chapter }) {
  return (
    <div className="slide slide--intro">
      <div className="intro-emoji-wrap">{chapter.emoji}</div>
      <p className="intro-chapter-label">챕터 {chapter.number}</p>
      <h2 className="intro-title">{chapter.title}</h2>
      <p className="intro-desc">{chapter.description}</p>
      <div className="intro-terms-row">
        {chapter.termIds.map((id) => (
          <span key={id} className="intro-term-chip">
            {termById[id]?.term}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Quiz transition slide (unchanged) ──────────── */
function QuizTransitionSlide({ chapter }) {
  return (
    <div className="slide slide--transition">
      <div className="transition-icon">🧩</div>
      <h2 className="transition-title">퀴즈 시간!</h2>
      <p className="transition-desc">
        지금까지 배운 <strong>{chapter.termIds.length}가지</strong> 내용으로 퀴즈를 풀어봐요!
      </p>
      <p className="transition-hint">70% 이상 맞히면 통과예요 💪</p>
    </div>
  );
}

/* ── LearnPage ──────────────────────────────────── */
// phase: 'intro' | 'stories' | 'quiz-transition'
export default function LearnPage({ chapter, onStartQuiz, onBack }) {
  const [phase, setPhase] = useState('intro');

  useEffect(() => {
    return () => sounds.stopBGM();
  }, []);

  /* ── INTRO phase ── */
  if (phase === 'intro') {
    return (
      <div className="learn-page">
        <div className="learn-topbar">
          <button className="learn-close-btn" onClick={() => { sounds.click(); onBack(); }}>✕</button>
          <div className="learn-bar-wrap">
            <div className="learn-bar-fill" style={{ width: '3%' }} />
          </div>
          <span className="learn-count">도입</span>
        </div>

        <div className="learn-slide-wrap">
          <IntroSlide chapter={chapter} />
        </div>

        <div className="learn-bottom">
          <button className="learn-next-btn" onClick={() => { sounds.slide(); setPhase('stories'); }}>
            시작하기 →
          </button>
        </div>
      </div>
    );
  }

  /* ── STORIES phase — full-screen StoryViewer ── */
  if (phase === 'stories') {
    return (
      <div className="learn-page learn-page--story">
        <StoryViewer
          termIds={chapter.termIds}
          onFinish={() => { sounds.slide(); setPhase('quiz-transition'); }}
          onBack={() => { sounds.slide(); setPhase('intro'); }}
        />
      </div>
    );
  }

  /* ── QUIZ TRANSITION phase ── */
  return (
    <div className="learn-page">
      <div className="learn-topbar">
        <button className="learn-close-btn" onClick={() => { sounds.click(); setPhase('stories'); }}>✕</button>
        <div className="learn-bar-wrap">
          <div className="learn-bar-fill" style={{ width: '100%' }} />
        </div>
        <span className="learn-count">완료</span>
      </div>

      <div className="learn-slide-wrap">
        <QuizTransitionSlide chapter={chapter} />
      </div>

      <div className="learn-bottom">
        <button className="learn-prev-btn" onClick={() => { sounds.slide(); setPhase('stories'); }}>← 이전</button>
        <button className="learn-next-btn" onClick={() => { sounds.quizStart(); onStartQuiz(); }}>
          퀴즈 시작! 🧩
        </button>
      </div>
    </div>
  );
}
