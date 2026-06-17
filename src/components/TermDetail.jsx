import { useEffect } from 'react';
import './TermDetail.css';

const CATEGORY_COLORS = {
  기초: 'blue',
  거래: 'green',
  차트: 'pink',
  지표: 'purple',
};

function StoryText({ paragraphs }) {
  return (
    <div className="story-text">
      {paragraphs.map((para, i) => (
        <p key={i} className="story-paragraph">
          {renderBold(para)}
        </p>
      ))}
    </div>
  );
}

function renderBold(text) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}

export default function TermDetail({ term, isLearned, onLearn, onClose }) {
  const colorClass = CATEGORY_COLORS[term.category] ?? 'blue';

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="term-detail-overlay" onClick={onClose}>
      <div className="term-detail-sheet" onClick={(e) => e.stopPropagation()}>
        {/* Handle bar */}
        <div className="sheet-handle" />

        {/* Header */}
        <div className={`detail-header detail-header--${colorClass}`}>
          <button className="close-btn" onClick={onClose} aria-label="닫기">✕</button>
          <div className="detail-scene">
            {term.scene.map((s, i) => (
              <span key={i} className="scene-emoji">{s}</span>
            ))}
          </div>
          <div className="detail-title-row">
            <span className={`category-badge category-badge--${colorClass}`}>{term.category}</span>
          </div>
          <h2 className="detail-term">{term.term}</h2>
          <p className="detail-term-en">{term.termEn}</p>
        </div>

        {/* Story body */}
        <div className="detail-body">
          <div className="story-block">
            <div className="story-label">📖 옛날이야기</div>
            <StoryText paragraphs={term.story} />
          </div>

          <div className="analogy-block">
            <span className="analogy-icon">💬</span>
            <span className="analogy-text">{term.analogy}</span>
          </div>

          <div className="keypoints-block">
            <div className="keypoints-label">✏️ 핵심 정리</div>
            <ul className="keypoints-list">
              {term.keyPoints.map((pt, i) => (
                <li key={i} className="keypoint-item">{pt}</li>
              ))}
            </ul>
          </div>

          <button
            className={`learn-btn ${isLearned ? 'learn-btn--done' : ''}`}
            onClick={onLearn}
          >
            {isLearned ? '✓ 학습 완료!' : '✅ 다 읽었어요!'}
          </button>
        </div>
      </div>
    </div>
  );
}
