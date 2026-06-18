import { CHAPTERS, CHAPTER_COLORS } from '../data/chapters';
import './ChapterMapPage.css';

export default function ChapterMapPage({ progress, onStartChapter }) {
  const completedCount = progress.completedChapters.size;

  return (
    <div className="map-page">
      <div className="map-header">
        <p className="map-greeting">주식 공부 여행 🗺️</p>
        <h2 className="map-title">어디까지 왔을까요?</h2>
        <div className="map-progress-pill">
          {completedCount}/{CHAPTERS.length} 챕터 완료
        </div>
      </div>

      <div className="chapter-path">
        {CHAPTERS.map((chapter, idx) => {
          const isUnlocked = progress.unlockedChapters.has(chapter.id);
          const isCompleted = progress.completedChapters.has(chapter.id);
          const isCurrent = isUnlocked && !isCompleted;
          const colors = CHAPTER_COLORS[chapter.color];

          return (
            <div key={chapter.id} className="path-item">
              {/* Connector line */}
              {idx > 0 && (
                <div className={`path-line ${isUnlocked ? 'path-line--active' : ''}`} />
              )}

              <div
                className={`chapter-card ${isCompleted ? 'chapter-card--done' : ''} ${isCurrent ? 'chapter-card--current' : ''} ${!isUnlocked ? 'chapter-card--locked' : ''}`}
                style={isUnlocked ? { '--ch-bg': colors.bg, '--ch-accent': colors.accent, '--ch-light': colors.light, '--ch-text': colors.text } : {}}
              >
                <div className="chapter-card__left">
                  <div
                    className="chapter-number"
                    style={isUnlocked ? { background: colors.accent } : {}}
                  >
                    {isCompleted ? '✓' : chapter.number}
                  </div>
                  <div className="chapter-info">
                    <span className="chapter-subtitle-badge">{chapter.subtitle}</span>
                    <h3 className="chapter-title">
                      {!isUnlocked && '🔒 '}
                      {chapter.emoji} {chapter.title}
                    </h3>
                    <p className="chapter-desc">
                      {isUnlocked ? chapter.description : '이전 챕터를 완료하면 열려요!'}
                    </p>
                  </div>
                </div>

                {isUnlocked && (
                  <button
                    className="chapter-btn"
                    style={{ background: colors.accent }}
                    onClick={() => onStartChapter(chapter.id)}
                  >
                    {isCompleted ? '복습' : isCurrent ? '시작 →' : '시작 →'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {completedCount === CHAPTERS.length && (
        <div className="all-done-banner">
          🎓 모든 챕터를 완료했어요! 이제 진짜 주식 공부를 시작할 준비가 됐어요!
        </div>
      )}
    </div>
  );
}
