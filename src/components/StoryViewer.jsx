import { useState, useCallback } from 'react';
import { TERM_STORIES } from '../data/stories';
import { sounds } from '../utils/sounds';
import './StoryViewer.css';

/* ── Real-world mockups ──────────────────────────── */
function Mockup({ type }) {
  switch (type) {
    case 'portfolio':
    case 'holdings':
      return (
        <div className="rwm rwm--dark">
          <div className="rwm-row"><span>삼성전자</span><span className="rwm-val">10주 보유</span></div>
          <div className="rwm-row"><span className="rwm-dim">평가금액</span><span className="rwm-green">745,000원</span></div>
        </div>
      );
    case 'price':
      return (
        <div className="rwm rwm--dark">
          <div className="rwm-row"><span className="rwm-bold">삼성전자</span><span className="rwm-val">74,500원</span></div>
          <div className="rwm-row"><span className="rwm-dim">전일 대비</span><span className="rwm-green">▲ 1,200 (1.64%)</span></div>
        </div>
      );
    case 'dividend':
      return (
        <div className="rwm rwm--dark">
          <div className="rwm-row"><span className="rwm-dim">배당금 수령</span><span className="rwm-green">+3,600원</span></div>
          <div className="rwm-row"><span className="rwm-dim">지급일</span><span className="rwm-val">2025.04.20</span></div>
        </div>
      );
    case 'exchange-badge':
      return (
        <div className="rwm rwm--dark">
          <div className="rwm-row">
            <span className="rwm-bold">카카오</span>
            <span className="rwm-badge rwm-badge--blue">KOSDAQ</span>
          </div>
          <div className="rwm-row">
            <span className="rwm-bold">삼성전자</span>
            <span className="rwm-badge rwm-badge--red">KOSPI</span>
          </div>
        </div>
      );
    case 'order':
      return (
        <div className="rwm rwm--dark">
          <div className="rwm-row"><span className="rwm-dim">종목</span><span className="rwm-val">삼성전자</span></div>
          <div className="rwm-row">
            <button className="rwm-btn rwm-btn--buy">매수</button>
            <button className="rwm-btn rwm-btn--sell">매도</button>
          </div>
        </div>
      );
    case 'market-cap':
      return (
        <div className="rwm rwm--dark">
          <div className="rwm-row"><span className="rwm-dim">#1</span><span className="rwm-bold">삼성전자</span><span className="rwm-val">485조</span></div>
          <div className="rwm-row"><span className="rwm-dim">#2</span><span>SK하이닉스</span><span className="rwm-val">118조</span></div>
        </div>
      );
    case 'index':
      return (
        <div className="rwm rwm--dark">
          <div className="rwm-row"><span className="rwm-bold">KOSPI</span><span className="rwm-green">2,641.52 ▲</span></div>
          <div className="rwm-row"><span className="rwm-bold">KOSDAQ</span><span className="rwm-red">866.30 ▼</span></div>
        </div>
      );
    case 'chart':
      return (
        <div className="rwm rwm--dark rwm--chart">
          <div className="rwm-candles">
            {[
              { h: 32, color: '#22c55e' }, { h: 20, color: '#ef4444' },
              { h: 40, color: '#22c55e' }, { h: 28, color: '#22c55e' },
              { h: 16, color: '#ef4444' }, { h: 44, color: '#22c55e' },
            ].map((c, i) => (
              <div key={i} className="rwm-candle" style={{ height: c.h, background: c.color }} />
            ))}
          </div>
          <div className="rwm-row" style={{ marginTop: 4 }}><span className="rwm-dim">1일봉 캔들차트</span></div>
        </div>
      );
    case 'limit':
      return (
        <div className="rwm rwm--dark">
          <div className="rwm-row"><span className="rwm-bold">한미약품</span><span className="rwm-green">↑ 상한가</span></div>
          <div className="rwm-row"><span className="rwm-dim">등락률</span><span className="rwm-green">+30.00%</span></div>
        </div>
      );
    case 'per-eps':
      return (
        <div className="rwm rwm--dark">
          <div className="rwm-row"><span className="rwm-dim">PER</span><span className="rwm-val">12.4배</span></div>
          <div className="rwm-row"><span className="rwm-dim">EPS</span><span className="rwm-val">6,012원</span></div>
        </div>
      );
    default:
      return null;
  }
}

/* ── Scene (placeholder until AI images are ready) ── */
function Scene({ slide }) {
  if (slide.imageUrl) {
    return <img src={slide.imageUrl} className="sv-scene-img" alt="" />;
  }
  return (
    <div
      className="sv-scene-placeholder"
      style={{ background: `linear-gradient(145deg, ${slide.bg[0]} 0%, ${slide.bg[1]} 100%)` }}
    >
      <span className="sv-visual">{slide.visual}</span>
    </div>
  );
}

/* ── Main StoryViewer ────────────────────────────── */
export default function StoryViewer({ termIds, onFinish, onBack }) {
  const [termIdx,  setTermIdx]  = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);

  const story   = TERM_STORIES[termIds[termIdx]];
  const slides  = story?.slides ?? [];
  const slide   = slides[slideIdx];

  const isLastSlide = slideIdx === slides.length - 1;
  const isLastTerm  = termIdx  === termIds.length - 1;

  const next = useCallback(() => {
    sounds.slide();
    if (!isLastSlide) {
      setSlideIdx(s => s + 1);
    } else if (!isLastTerm) {
      setTermIdx(t => t + 1);
      setSlideIdx(0);
    } else {
      onFinish();
    }
  }, [isLastSlide, isLastTerm, onFinish]);

  const prev = useCallback(() => {
    if (slideIdx > 0) {
      sounds.slide();
      setSlideIdx(s => s - 1);
    } else if (termIdx > 0) {
      sounds.slide();
      const prevStory = TERM_STORIES[termIds[termIdx - 1]];
      setTermIdx(t => t - 1);
      setSlideIdx(prevStory.slides.length - 1);
    } else {
      sounds.click();
      onBack();
    }
  }, [slideIdx, termIdx, termIds, onBack]);

  if (!slide) return null;

  const isFinishBtn = isLastSlide && isLastTerm;

  return (
    <div className="sv">
      {/* Instagram Stories-style progress bars */}
      <div className="sv-bars">
        {slides.map((_, i) => (
          <div key={i} className={`sv-bar ${i < slideIdx ? 'sv-bar--done' : i === slideIdx ? 'sv-bar--active' : ''}`} />
        ))}
      </div>

      {/* Header row */}
      <div className="sv-header">
        <div className="sv-term-info">
          <span className="sv-term-name">{story?.term}</span>
          <span className="sv-term-en">{story?.termEn}</span>
        </div>
        <span className="sv-term-pos">{termIdx + 1} / {termIds.length}</span>
        <button className="sv-close" onClick={() => { sounds.click(); onBack(); }}>✕</button>
      </div>

      {/* Scene illustration */}
      <Scene slide={slide} />

      {/* Text content */}
      <div className="sv-content">
        <p className="sv-text">{slide.text}</p>

        {slide.realWorld && (
          <div className="sv-rw">
            <div className="sv-rw-label">📱 {slide.realWorld.label}</div>
            <Mockup type={slide.realWorld.mockup} />
            <p className="sv-rw-desc">{slide.realWorld.desc}</p>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div className="sv-nav">
        <button className="sv-prev" onClick={prev}>← 이전</button>
        <button className="sv-next" onClick={next}>
          {isFinishBtn ? '완료 ✓' : isLastSlide ? `다음 용어 →` : '다음 →'}
        </button>
      </div>

      {/* Invisible tap zones — left / right halves */}
      <button className="sv-tap sv-tap--left"  onClick={prev} aria-hidden="true" />
      <button className="sv-tap sv-tap--right" onClick={next} aria-hidden="true" />
    </div>
  );
}
