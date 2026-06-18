import { useState } from 'react';
import { TERMS } from '../data/glossary';
import './LearnPage.css';

const termById = Object.fromEntries(TERMS.map((t) => [t.id, t]));

function renderBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

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

function TermSlide({ term }) {
  return (
    <div className="slide slide--term">
      <div className="term-slide-header">
        <div className="term-slide-scene">
          {term.scene.map((s, i) => <span key={i}>{s}</span>)}
        </div>
        <h2 className="term-slide-name">{term.term}</h2>
        <p className="term-slide-en">{term.termEn}</p>
      </div>

      <div className="term-slide-body">
        <div className="story-block">
          <div className="story-label">📖 옛날이야기</div>
          <div className="story-paragraphs">
            {term.story.map((para, i) => (
              <p key={i} className="story-p">{renderBold(para)}</p>
            ))}
          </div>
        </div>
        <div className="analogy-row">
          <span>💬</span>
          <span>{term.analogy}</span>
        </div>
        <div className="keypoints">
          <div className="keypoints-label">핵심 정리</div>
          <ul>
            {term.keyPoints.map((pt, i) => <li key={i}>{pt}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

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

export default function LearnPage({ chapter, onStartQuiz, onBack }) {
  const terms = chapter.termIds.map((id) => termById[id]).filter(Boolean);
  const totalSlides = 1 + terms.length + 1;

  const [slideIndex, setSlideIndex] = useState(0);
  const [dir, setDir] = useState('next');
  const [animating, setAnimating] = useState(false);

  const pct = Math.round((slideIndex / (totalSlides - 1)) * 100);
  const isLastSlide = slideIndex === totalSlides - 1;

  const go = (delta) => {
    if (animating) return;
    const next = slideIndex + delta;
    if (next < 0) { onBack(); return; }
    setDir(delta > 0 ? 'next' : 'prev');
    setAnimating(true);
    setTimeout(() => { setSlideIndex(next); setAnimating(false); }, 150);
  };

  const renderSlide = () => {
    if (slideIndex === 0) return <IntroSlide chapter={chapter} />;
    if (slideIndex === totalSlides - 1) return <QuizTransitionSlide chapter={chapter} />;
    return <TermSlide term={terms[slideIndex - 1]} />;
  };

  return (
    <div className="learn-page">
      <div className="learn-topbar">
        <button className="learn-close-btn" onClick={onBack} aria-label="나가기">✕</button>
        <div className="learn-bar-wrap">
          <div className="learn-bar-fill" style={{ width: `${Math.max(pct, 3)}%` }} />
        </div>
        <span className="learn-count">{slideIndex + 1}/{totalSlides}</span>
      </div>

      <div className={`learn-slide-wrap ${animating ? `slide-exit-${dir}` : ''}`}>
        {renderSlide()}
      </div>

      <div className="learn-bottom">
        {slideIndex > 0 && (
          <button className="learn-prev-btn" onClick={() => go(-1)}>← 이전</button>
        )}
        {!isLastSlide ? (
          <button className="learn-next-btn" onClick={() => go(1)}>다음 →</button>
        ) : (
          <button className="learn-next-btn" onClick={onStartQuiz}>퀴즈 시작! 🧩</button>
        )}
      </div>
    </div>
  );
}
