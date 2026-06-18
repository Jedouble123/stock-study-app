import { useState } from 'react';
import { CHAPTER_COLORS } from '../data/chapters';
import './QuizPage.css';

const PASS_RATIO = 0.7;

export default function QuizPage({ chapter, onComplete, onRetry, onBack }) {
  const colors = CHAPTER_COLORS[chapter.color];
  const questions = chapter.quiz;

  const [qIndex, setQIndex] = useState(0);
  const [selected, setSelected] = useState(null);   // index of chosen option
  const [answers, setAnswers] = useState([]);        // true/false per question
  const [phase, setPhase] = useState('question');    // 'question' | 'result'

  const currentQ = questions[qIndex];
  const isAnswered = selected !== null;
  const isCorrect = selected === currentQ?.correctIndex;

  const handleSelect = (optIdx) => {
    if (isAnswered) return;
    setSelected(optIdx);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected === currentQ.correctIndex];
    setAnswers(newAnswers);

    if (qIndex + 1 < questions.length) {
      setQIndex((q) => q + 1);
      setSelected(null);
    } else {
      setPhase('result');
    }
  };

  const score = answers.filter(Boolean).length;
  const passed = phase === 'result' && score / questions.length >= PASS_RATIO;

  if (phase === 'result') {
    return <ResultScreen
      chapter={chapter}
      colors={colors}
      score={score}
      total={questions.length}
      passed={passed}
      onComplete={onComplete}
      onRetry={onRetry}
    />;
  }

  return (
    <div className="quiz-page">
      {/* Header */}
      <div className="quiz-header" style={{ '--ch-bg': colors.bg, '--ch-accent': colors.accent }}>
        <button className="quiz-back-btn" onClick={onBack}>← 나가기</button>
        <div className="quiz-meta">
          <span className="quiz-label">퀴즈 · {chapter.emoji} {chapter.title}</span>
          <span className="quiz-count">{qIndex + 1} / {questions.length}</span>
        </div>
        <div className="quiz-progress-track">
          <div
            className="quiz-progress-fill"
            style={{ width: `${((qIndex + (isAnswered ? 1 : 0)) / questions.length) * 100}%`, background: colors.accent }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="quiz-body">
        <div className="question-num-badge" style={{ background: colors.bg, color: colors.text }}>
          문제 {qIndex + 1}
        </div>
        <p className="question-text">{currentQ.question}</p>

        {/* Options */}
        <div className="options-list">
          {currentQ.options.map((opt, i) => {
            let cls = 'option-btn';
            if (isAnswered) {
              if (i === currentQ.correctIndex) cls += ' option-btn--correct';
              else if (i === selected) cls += ' option-btn--wrong';
              else cls += ' option-btn--dim';
            } else if (i === selected) {
              cls += ' option-btn--selected';
            }
            return (
              <button key={i} className={cls} onClick={() => handleSelect(i)}>
                <span className="option-alpha">{String.fromCharCode(65 + i)}</span>
                <span className="option-text">{opt}</span>
                {isAnswered && i === currentQ.correctIndex && <span className="option-icon">✓</span>}
                {isAnswered && i === selected && i !== currentQ.correctIndex && <span className="option-icon">✗</span>}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {isAnswered && (
          <div className={`explanation ${isCorrect ? 'explanation--correct' : 'explanation--wrong'}`}>
            <p className="explanation-verdict">{isCorrect ? '🎉 정답이에요!' : '🥲 아쉬워요!'}</p>
            <p className="explanation-text">{currentQ.explanation}</p>
          </div>
        )}
      </div>

      {/* Next button */}
      {isAnswered && (
        <div className="quiz-footer">
          <button
            className="quiz-next-btn"
            style={{ background: colors.accent }}
            onClick={handleNext}
          >
            {qIndex + 1 < questions.length ? '다음 문제 →' : '결과 보기 →'}
          </button>
        </div>
      )}
    </div>
  );
}

function ResultScreen({ chapter, colors, score, total, passed, onComplete, onRetry }) {
  const pct = Math.round((score / total) * 100);

  return (
    <div className="result-screen">
      <div className="result-top" style={{ '--ch-bg': colors.bg }}>
        <div className="result-icon">{passed ? '🎉' : '😅'}</div>
        <h2 className="result-title">{passed ? '통과!' : '아쉬워요!'}</h2>
        <p className="result-score-text">
          <span className="result-score-num">{score}</span>
          <span className="result-score-total"> / {total}</span>
        </p>
        <div className="result-pct-bar">
          <div
            className="result-pct-fill"
            style={{ width: `${pct}%`, background: passed ? '#16a34a' : '#f59e0b' }}
          />
        </div>
        <p className="result-pct-label">{pct}% 정답</p>
      </div>

      <div className="result-body">
        {passed ? (
          <>
            <div className="result-message result-message--pass">
              <p>🌟 대단해요! <strong>{chapter.title}</strong> 챕터를 완료했어요!</p>
              <p style={{ marginTop: '0.4rem', fontSize: '0.85rem', color: '#6b7280' }}>
                다음 챕터가 열렸어요!
              </p>
            </div>
            <button
              className="result-btn result-btn--primary"
              style={{ background: colors.accent }}
              onClick={onComplete}
            >
              다음 챕터 가기 →
            </button>
          </>
        ) : (
          <>
            <div className="result-message result-message--fail">
              <p>70% 이상 맞혀야 통과예요.<br />한 번 더 도전해볼까요? 💪</p>
            </div>
            <button
              className="result-btn result-btn--primary"
              style={{ background: colors.accent }}
              onClick={onRetry}
            >
              다시 도전하기
            </button>
            <button className="result-btn result-btn--secondary" onClick={onRetry}>
              내용 다시 보기
            </button>
          </>
        )}
      </div>
    </div>
  );
}
