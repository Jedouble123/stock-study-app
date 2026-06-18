import { useState } from 'react';
import { TERMS } from '../data/glossary';
import { CHAPTER_COLORS } from '../data/chapters';
import './LearnPage.css';

const termById = Object.fromEntries(TERMS.map((t) => [t.id, t]));

function renderBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

function IntroSlide({ chapter, colors }) {
  return (
    <div className="slide slide--intro" style={{ '--ch-bg': colors.bg, '--ch-accent': colors.accent }}>
      <div className="intro-emoji-wrap">
        <span className="intro-emoji">{chapter.emoji}</span>
      </div>
      <div className="intro-chapter-num">챕터 {chapter.number}</div>
      <h2 className="intro-title">{chapter.title}</h2>
      <p className="intro-desc">{chapter.description}</p>
      <div className="intro-terms-preview">
        {chapter.termIds.map((id) => (
          <span key={id} className="intro-term-chip">
            {termById[id]?.term}
          </span>
        ))}
      </div>
    </div>
  );
}

function TermSlide({ term, colors }) {
  return (
    <div className="slide slide--term">
      <div className="term-slide-header" style={{ '--ch-bg': colors.bg }}>
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
          <div className="keypoints-label">✏️ 핵심 정리</div>
          <ul>
            {term.keyPoints.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function QuizTransitionSlide({ chapter, colors }) {
  return (
    <div className="slide slide--transition" style={{ '--ch-accent': colors.accent }}>
      <div className="transition-icon">🧩</div>
      <h2 className="transition-title">퀴즈 시간!</h2>
      <p className="transition-desc">
        지금까지 배운 <strong>{chapter.termIds.length}가지</strong> 내용으로<br />
        퀴즈를 풀어봐요!<br /><br />
        <span className="transition-hint">70% 이상 맞히면 통과예요 💪</span>
      </p>
    </div>
  );
}

export default function LearnPage({ chapter, onStartQuiz, onBack }) {
  const colors = CHAPTER_COLORS[chapter.color];
  const terms = chapter.termIds.map((id) => termById[id]).filter(Boolean);

  // slides: intro + terms + transition
  const totalSlides = 1 + terms.length + 1;
  const [slideIndex, setSlideIndex] = useState(0);
  const [dir, setDir] = useState('next'); // 'next' | 'prev'
  const [animating, setAnimating] = useState(false);

  const isLastSlide = slideIndex === totalSlides - 1;

  const go = (delta) => {
    if (animating) return;
    const next = slideIndex + delta;
    if (next < 0) { onBack(); return; }
    setDir(delta > 0 ? 'next' : 'prev');
    setAnimating(true);
    setTimeout(() => {
      setSlideIndex(next);
      setAnimating(false);
    }, 200);
  };

  const renderSlide = () => {
    if (slideIndex === 0) return <IntroSlide chapter={chapter} colors={colors} />;
    if (slideIndex === totalSlides - 1) return <QuizTransitionSlide chapter={chapter} colors={colors} />;
    return <TermSlide term={terms[slideIndex - 1]} colors={colors} />;
  };

  return (
    <div className="learn-page">
      {/* Top bar */}
      <div className="learn-topbar">
        <button className="learn-back-btn" onClick={onBack}>← 나가기</button>
        <div className="learn-progress-dots">
          {Array.from({ length: totalSlides }, (_, i) => (
            <span
              key={i}
              className={`dot ${i === slideIndex ? 'dot--active' : ''} ${i < slideIndex ? 'dot--done' : ''}`}
            />
          ))}
        </div>
        <span className="learn-page-count">{slideIndex + 1}/{totalSlides}</span>
      </div>

      {/* Slide */}
      <div className={`learn-slide-wrap ${animating ? `slide-exit-${dir}` : ''}`}>
        {renderSlide()}
      </div>

      {/* Bottom nav */}
      <div className="learn-bottom">
        {slideIndex > 0 && (
          <button className="nav-btn nav-btn--prev" onClick={() => go(-1)}>← 이전</button>
        )}
        {!isLastSlide ? (
          <button
            className="nav-btn nav-btn--next"
            style={{ background: colors.accent }}
            onClick={() => go(1)}
          >
            다음 →
          </button>
        ) : (
          <button
            className="nav-btn nav-btn--quiz"
            style={{ background: colors.accent }}
            onClick={onStartQuiz}
          >
            퀴즈 시작! 🧩
          </button>
        )}
      </div>
    </div>
  );
}
