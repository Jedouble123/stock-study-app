import './TermCard.css';

const CATEGORY_COLORS = {
  기초: 'blue',
  거래: 'green',
  차트: 'pink',
  지표: 'purple',
};

export default function TermCard({ term, isLearned, onClick }) {
  const colorClass = CATEGORY_COLORS[term.category] ?? 'blue';

  return (
    <button className={`term-card ${isLearned ? 'is-learned' : ''}`} onClick={onClick}>
      {isLearned && <span className="learned-badge">✓ 완료</span>}

      <div className={`term-card__emoji-box emoji-box--${colorClass}`}>
        <span className="term-card__emoji">{term.emoji}</span>
      </div>

      <div className="term-card__body">
        <div className="term-card__header">
          <span className={`category-badge category-badge--${colorClass}`}>{term.category}</span>
        </div>
        <h3 className="term-card__term">{term.term}</h3>
        <p className="term-card__term-en">{term.termEn}</p>
        <p className="term-card__desc">{term.shortDesc}</p>
      </div>

      <div className="term-card__footer">
        <span className="read-story-hint">📖 이야기 읽기</span>
      </div>
    </button>
  );
}
