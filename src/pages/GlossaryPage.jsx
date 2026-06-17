import { useState, useMemo } from 'react';
import { TERMS, CATEGORIES } from '../data/glossary';
import TermCard from '../components/TermCard';
import TermDetail from '../components/TermDetail';
import './GlossaryPage.css';

function useLearnedTerms() {
  const [learned, setLearned] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem('learnedTerms') ?? '[]'));
    } catch {
      return new Set();
    }
  });

  const toggle = (id) => {
    setLearned((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      localStorage.setItem('learnedTerms', JSON.stringify([...next]));
      return next;
    });
  };

  return [learned, toggle];
}

export default function GlossaryPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('전체');
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [learned, toggleLearned] = useLearnedTerms();

  const filtered = useMemo(() => {
    return TERMS.filter((t) => {
      const matchCat = activeCategory === '전체' || t.category === activeCategory;
      const q = query.trim().toLowerCase();
      const matchQ = !q || t.term.includes(q) || t.termEn.toLowerCase().includes(q) || t.shortDesc.includes(q);
      return matchCat && matchQ;
    });
  }, [query, activeCategory]);

  const progress = learned.size;
  const total = TERMS.length;
  const pct = Math.round((progress / total) * 100);

  return (
    <div className="glossary-page">
      {/* Progress bar */}
      <div className="progress-banner">
        <div className="progress-text">
          <span className="progress-label">📚 학습 진도</span>
          <span className="progress-count">{progress} / {total} 단어</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        {progress === total && (
          <p className="progress-complete">🎉 모든 단어를 완료했어요! 대단해요!</p>
        )}
      </div>

      {/* Search */}
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="용어 검색... (예: 주식, PER)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        {query && (
          <button className="search-clear" onClick={() => setQuery('')}>✕</button>
        )}
      </div>

      {/* Category tabs */}
      <div className="category-tabs">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? 'category-tab--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Term count */}
      <p className="term-count">
        {filtered.length}개 단어
        {query && <span className="search-info"> · "{query}" 검색 결과</span>}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="terms-grid">
          {filtered.map((term) => (
            <TermCard
              key={term.id}
              term={term}
              isLearned={learned.has(term.id)}
              onClick={() => setSelectedTerm(term)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="empty-emoji">🔍</p>
          <p className="empty-text">"{query}"에 해당하는 용어가 없어요.</p>
        </div>
      )}

      {/* Detail panel */}
      {selectedTerm && (
        <TermDetail
          term={selectedTerm}
          isLearned={learned.has(selectedTerm.id)}
          onLearn={() => toggleLearned(selectedTerm.id)}
          onClose={() => setSelectedTerm(null)}
        />
      )}
    </div>
  );
}
