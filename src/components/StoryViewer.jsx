import { useState, useCallback } from 'react';
import { TERM_STORIES } from '../data/stories';
import { sounds } from '../utils/sounds';
import './StoryViewer.css';

/* ── MTS Screenshot — 실제 증권 앱처럼 보이는 하이라이트 컴포넌트 ── */
function MtsScreenshot({ type, desc }) {
  return (
    <div className="mts-wrap">
      <div className="mts-label">📱 실제 증권 앱에서는</div>
      <div className="mts-frame">
        <MtsContent type={type} />
      </div>
      <p className="mts-desc">{desc}</p>
    </div>
  );
}

function MtsContent({ type }) {
  switch (type) {
    case 'portfolio':
    case 'holdings':
      return (
        <div className="mts-screen">
          <div className="mts-topbar">← 보유주식</div>
          <div className="mts-stock-row">
            <div className="mts-row-main">
              <span className="mts-name">삼성전자 <span className="mts-code">005930</span></span>
              <span className="mts-qty">10주</span>
            </div>
            <div className="mts-highlight-box">
              <div className="mts-hl-row"><span className="mts-dim">평가금액</span><span className="mts-val">745,000원</span></div>
              <div className="mts-hl-row"><span className="mts-dim">수익률</span><span className="mts-up">▲ +4.49%</span></div>
              <div className="mts-hl-pulse" />
            </div>
          </div>
          <div className="mts-divider" />
          <div className="mts-stock-row mts-stock-row--dim">
            <div className="mts-row-main">
              <span className="mts-name">SK하이닉스</span>
              <span className="mts-qty">3주</span>
            </div>
            <div className="mts-hl-row"><span className="mts-dim">수익률</span><span className="mts-down">▼ -2.10%</span></div>
          </div>
        </div>
      );

    case 'price':
      return (
        <div className="mts-screen">
          <div className="mts-topbar">← 삼성전자 <span className="mts-code">005930</span></div>
          <div className="mts-highlight-box mts-highlight-box--price">
            <div className="mts-big-price">74,500<span className="mts-unit">원</span></div>
            <div className="mts-hl-row mts-hl-row--center"><span className="mts-up mts-up--lg">▲ 1,200 (+1.64%)</span></div>
            <div className="mts-hl-pulse" />
          </div>
          <div className="mts-info-row">
            <span><span className="mts-dim">고가</span> 75,800</span>
            <span><span className="mts-dim">저가</span> 73,200</span>
            <span><span className="mts-dim">거래량</span> 12.4M</span>
          </div>
        </div>
      );

    case 'dividend':
      return (
        <div className="mts-screen">
          <div className="mts-topbar">← 배당금 내역</div>
          <div className="mts-divider" />
          <div className="mts-div-item">
            <div className="mts-hl-row"><span className="mts-name">삼성전자</span><span className="mts-dim">2025.04.20</span></div>
            <div className="mts-highlight-box">
              <div className="mts-hl-row"><span className="mts-dim">주당 배당금</span><span className="mts-val">360원</span></div>
              <div className="mts-hl-row"><span className="mts-dim">수령액</span><span className="mts-up mts-up--lg">+3,600원</span></div>
              <div className="mts-hl-pulse" />
            </div>
          </div>
          <div className="mts-divider" />
          <div className="mts-div-item mts-stock-row--dim">
            <div className="mts-hl-row"><span className="mts-name">POSCO홀딩스</span><span className="mts-dim">2025.03.28</span></div>
            <div className="mts-hl-row"><span className="mts-dim">수령액</span><span className="mts-up">+8,000원</span></div>
          </div>
        </div>
      );

    case 'exchange-badge':
      return (
        <div className="mts-screen">
          <div className="mts-topbar">← 종목 검색</div>
          <div className="mts-divider" />
          <div className="mts-search-item">
            <div className="mts-hl-row">
              <span className="mts-name">삼성전자</span>
              <div className="mts-highlight-box mts-highlight-box--badge">
                <span className="mts-badge mts-badge--red">KOSPI</span>
                <div className="mts-hl-pulse" />
              </div>
            </div>
            <span className="mts-dim">005930 · 반도체</span>
          </div>
          <div className="mts-divider" />
          <div className="mts-search-item">
            <div className="mts-hl-row">
              <span className="mts-name">카카오</span>
              <span className="mts-badge mts-badge--blue">KOSDAQ</span>
            </div>
            <span className="mts-dim">035720 · IT서비스</span>
          </div>
        </div>
      );

    case 'order':
      return (
        <div className="mts-screen">
          <div className="mts-topbar">← 주문</div>
          <div className="mts-order-top">
            <span className="mts-name">삼성전자</span>
            <span className="mts-val">74,500원</span>
          </div>
          <div className="mts-divider" />
          <div className="mts-order-qty">
            <span className="mts-dim">수량</span>
            <div className="mts-qty-ctrl">
              <span className="mts-qty-btn">−</span>
              <span className="mts-qty-val">1</span>
              <span className="mts-qty-btn">+</span>
            </div>
          </div>
          <div className="mts-highlight-box mts-highlight-box--order">
            <div className="mts-order-btns">
              <button className="mts-order-btn mts-order-btn--buy">매수</button>
              <button className="mts-order-btn mts-order-btn--sell">매도</button>
            </div>
            <div className="mts-hl-pulse" />
          </div>
        </div>
      );

    case 'market-cap':
      return (
        <div className="mts-screen">
          <div className="mts-topbar">← 시가총액 순위</div>
          <div className="mts-rank-item mts-rank-item--top">
            <span className="mts-rank-no">1</span>
            <div className="mts-rank-info">
              <span className="mts-name">삼성전자</span>
              <div className="mts-highlight-box mts-highlight-box--inline">
                <span className="mts-dim">시가총액</span>
                <span className="mts-val">485조원</span>
                <div className="mts-hl-pulse" />
              </div>
            </div>
            <span className="mts-up">▲ 1.2%</span>
          </div>
          <div className="mts-divider" />
          <div className="mts-rank-item mts-stock-row--dim">
            <span className="mts-rank-no">2</span>
            <div className="mts-rank-info"><span className="mts-name">SK하이닉스</span><span className="mts-dim">118조원</span></div>
            <span className="mts-down">▼ 0.8%</span>
          </div>
        </div>
      );

    case 'index':
      return (
        <div className="mts-screen">
          <div className="mts-topbar">← 시장 현황</div>
          <div className="mts-highlight-box mts-highlight-box--index">
            <div className="mts-index-row">
              <span className="mts-index-name">KOSPI</span>
              <span className="mts-index-val">2,641.52</span>
              <span className="mts-up">▲ 12.4</span>
            </div>
            <div className="mts-index-row">
              <span className="mts-index-name">KOSDAQ</span>
              <span className="mts-index-val">866.30</span>
              <span className="mts-down">▼ 5.1</span>
            </div>
            <div className="mts-hl-pulse" />
          </div>
          <div className="mts-divider" />
          <div className="mts-index-row mts-stock-row--dim">
            <span className="mts-index-name mts-dim">NASDAQ</span>
            <span className="mts-index-val">17,482</span>
            <span className="mts-up">▲ 0.4%</span>
          </div>
        </div>
      );

    case 'chart':
      return (
        <div className="mts-screen">
          <div className="mts-topbar">← 삼성전자 차트</div>
          <div className="mts-price-mini">
            <span className="mts-val">74,500원</span>
            <span className="mts-up">▲ +1.64%</span>
          </div>
          <div className="mts-highlight-box mts-highlight-box--chart">
            <div className="mts-candles">
              {[
                { h: 30, t: 6,  color: '#ef4444', top: 8  },
                { h: 36, t: 4,  color: '#ef4444', top: 6  },
                { h: 22, t: 8,  color: '#3b82f6', top: 12 },
                { h: 40, t: 5,  color: '#ef4444', top: 4  },
                { h: 18, t: 10, color: '#3b82f6', top: 16 },
                { h: 44, t: 3,  color: '#ef4444', top: 2  },
                { h: 28, t: 7,  color: '#ef4444', top: 8  },
              ].map((c, i) => (
                <div key={i} className="mts-candle-wrap">
                  <div className="mts-wick" style={{ height: c.t, background: c.color }} />
                  <div className="mts-candle-body" style={{ height: c.h, background: c.color }} />
                  <div className="mts-wick" style={{ height: c.t - 2, background: c.color }} />
                </div>
              ))}
            </div>
            <div className="mts-chart-label"><span className="mts-dim">1일봉</span></div>
            <div className="mts-hl-pulse" />
          </div>
        </div>
      );

    case 'limit':
      return (
        <div className="mts-screen">
          <div className="mts-topbar">← 한미약품 <span className="mts-code">128940</span></div>
          <div className="mts-price-mini">
            <div className="mts-highlight-box mts-highlight-box--price">
              <div className="mts-big-price">78,000<span className="mts-unit">원</span></div>
              <div className="mts-hl-row mts-hl-row--center">
                <span className="mts-up mts-up--lg">▲ 상한가 +30.00%</span>
              </div>
              <div className="mts-hl-pulse" />
            </div>
          </div>
          <div className="mts-divider" />
          <div className="mts-info-row mts-stock-row--dim">
            <span><span className="mts-dim">전일가</span> 60,000</span>
            <span><span className="mts-dim">거래량</span> 급증</span>
          </div>
        </div>
      );

    case 'per-eps':
      return (
        <div className="mts-screen">
          <div className="mts-topbar">← 삼성전자 기업정보</div>
          <div className="mts-info-grid">
            <div className="mts-info-item mts-stock-row--dim">
              <span className="mts-dim">시가총액</span><span className="mts-val">485조</span>
            </div>
            <div className="mts-info-item mts-stock-row--dim">
              <span className="mts-dim">배당수익률</span><span className="mts-val">2.1%</span>
            </div>
          </div>
          <div className="mts-highlight-box">
            <div className="mts-hl-row"><span className="mts-dim">PER</span><span className="mts-val">12.4배</span></div>
            <div className="mts-hl-row"><span className="mts-dim">EPS</span><span className="mts-val">6,012원</span></div>
            <div className="mts-hl-pulse" />
          </div>
        </div>
      );

    default:
      return null;
  }
}

/* ── DeepDive — 더보기 섹션 ── */
function DeepDive({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="deepdive">
      <button className="deepdive-toggle" onClick={() => { sounds.click(); setOpen(o => !o); }}>
        <span className="deepdive-icon">{open ? '▲' : '▼'}</span>
        {open ? '접기' : `더 알아보기 — ${data.title}`}
      </button>
      {open && (
        <div className="deepdive-body">
          {data.items.map((item, i) => (
            <div key={i} className="deepdive-item">
              <span className="deepdive-label">{item.label}</span>
              <span className="deepdive-desc">{item.desc}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Scene (image or gradient+emoji) ── */
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

/* ── Main StoryViewer ── */
export default function StoryViewer({ termIds, onFinish, onBack }) {
  const [termIdx,  setTermIdx]  = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);

  const story  = TERM_STORIES[termIds[termIdx]];
  const slides = story?.slides ?? [];
  const slide  = slides[slideIdx];

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
      {/* Instagram Stories 진행 바 */}
      <div className="sv-bars">
        {slides.map((_, i) => (
          <div key={i} className={`sv-bar ${i < slideIdx ? 'sv-bar--done' : i === slideIdx ? 'sv-bar--active' : ''}`} />
        ))}
      </div>

      {/* 헤더 */}
      <div className="sv-header">
        <div className="sv-term-info">
          <span className="sv-term-name">{story?.term}</span>
          <span className="sv-term-en">{story?.termEn}</span>
        </div>
        <span className="sv-term-pos">{termIdx + 1} / {termIds.length}</span>
        <button className="sv-close" onClick={() => { sounds.click(); onBack(); }}>✕</button>
      </div>

      {/* 씬 이미지 */}
      <Scene slide={slide} />

      {/* 텍스트 + 실세계 / 더보기 */}
      <div className="sv-content">
        <p className="sv-text">{slide.text}</p>

        {slide.realWorld && (
          <MtsScreenshot
            type={slide.realWorld.mockup}
            desc={slide.realWorld.desc}
          />
        )}

        {slide.deepDive && <DeepDive data={slide.deepDive} />}
      </div>

      {/* 하단 네비 */}
      <div className="sv-nav">
        <button className="sv-prev" onClick={prev}>← 이전</button>
        <button className="sv-next" onClick={next}>
          {isFinishBtn ? '완료 ✓' : isLastSlide ? '다음 용어 →' : '다음 →'}
        </button>
      </div>

      {/* 투명 탭 영역 */}
      <button className="sv-tap sv-tap--left"  onClick={prev} aria-hidden="true" />
      <button className="sv-tap sv-tap--right" onClick={next} aria-hidden="true" />
    </div>
  );
}
