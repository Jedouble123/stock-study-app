import { CHAPTERS } from '../data/chapters';
import { sounds } from '../utils/sounds';
import './ChapterMapPage.css';

export default function ChapterMapPage({ progress, onStartChapter }) {
  const completed = progress.completedChapters.size;
  const total     = CHAPTERS.length;
  const pct       = Math.round((completed / total) * 100);

  return (
    <div className="map-page">
      <div className="map-header">
        <p className="map-section-label">학습 진도</p>
        <h2 className="map-title">어디까지 왔을까요?</h2>
        <div className="map-progress-wrap">
          <div className="map-progress-meta">
            <span>{completed}/{total} 챕터 완료</span>
            <span>{pct}%</span>
          </div>
          <div className="map-progress-track">
            <div className="map-progress-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      <div className="chapter-path">
        {CHAPTERS.map((chapter, idx) => {
          const isUnlocked  = progress.unlockedChapters.has(chapter.id);
          const isCompleted = progress.completedChapters.has(chapter.id);
          const isCurrent   = isUnlocked && !isCompleted;

          return (
            <div key={chapter.id} className="path-item">
              {idx > 0 && (
                <div className="path-connector">
                  <div className={`path-line ${isUnlocked ? 'path-line--done' : ''}`} />
                </div>
              )}

              <div className={`chapter-card ${isCompleted ? 'chapter-card--done' : ''} ${isCurrent ? 'chapter-card--current' : ''} ${!isUnlocked ? 'chapter-card--locked' : ''}`}>
                {/* Number */}
                <div className={`chapter-num-circle ${isCompleted ? 'chapter-num-circle--done' : ''} ${isCurrent ? 'chapter-num-circle--current' : ''}`}>
                  {isCompleted ? '✓' : chapter.emoji}
                </div>

                {/* Info */}
                <div className="chapter-info">
                  <span className="chapter-tag">{chapter.subtitle}</span>
                  <h3 className="chapter-title">
                    {!isUnlocked && '🔒 '}
                    {chapter.title}
                  </h3>
                  <p className="chapter-desc">
                    {isUnlocked ? chapter.description : '이전 챕터를 완료하면 열려요!'}
                  </p>
                </div>

                {/* CTA */}
                {isUnlocked && (
                  <div className="chapter-cta">
                    {isCompleted ? (
                      <button className="chapter-review-btn" onClick={() => { sounds.click(); onStartChapter(chapter.id); }}>
                        복습
                      </button>
                    ) : (
                      <button className="chapter-start-btn" onClick={() => { sounds.click(); onStartChapter(chapter.id); }}>
                        시작 →
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {completed === total && (
        <div className="all-done-banner">
          🎓 모든 챕터 완료! 이제 진짜 주식 공부를 시작할 준비가 됐어요!
        </div>
      )}
    </div>
  );
}
