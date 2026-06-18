import { useState, useEffect } from 'react';
import { sounds } from '../utils/sounds';
import './QuizPage.css';

const PASS_RATIO = 0.7;

export default function QuizPage({ chapter, onComplete, onRetry, onBack }) {
  const questions = chapter.quiz;

  const [qIndex,   setQIndex]   = useState(0);
  const [selected, setSelected] = useState(null);   // chosen option index
  const [checked,  setChecked]  = useState(false);  // "확인" pressed
  const [answers,  setAnswers]  = useState([]);
  const [phase,    setPhase]    = useState('question'); // 'question' | 'result'

  const currentQ  = questions[qIndex];
  const isCorrect = checked && selected === currentQ?.correctIndex;

  const handleSelect = (i) => {
    if (checked) return;
    sounds.click();
    setSelected(i);
  };

  const handleCheck = () => {
    if (selected === null || checked) return;
    setChecked(true);
    if (selected === currentQ?.correctIndex) sounds.correct();
    else sounds.wrong();
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected === currentQ.correctIndex];
    setAnswers(newAnswers);
    if (qIndex + 1 < questions.length) {
      sounds.slide();
      setQIndex((q) => q + 1);
      setSelected(null);
      setChecked(false);
    } else {
      const didPass = newAnswers.filter(Boolean).length / questions.length >= PASS_RATIO;
      if (didPass) sounds.complete();
      setPhase('result');
    }
  };

  const score  = answers.filter(Boolean).length;
  const passed = phase === 'result' && score / questions.length >= PASS_RATIO;

  if (phase === 'result') {
    return <ResultScreen
      chapter={chapter}
      score={score}
      total={questions.length}
      passed={passed}
      onComplete={onComplete}
      onRetry={onRetry}
    />;
  }

  const footerState = !checked ? 'idle' : isCorrect ? 'correct' : 'wrong';

  return (
    <div className="quiz-page">
      {/* Top bar */}
      <div className="quiz-topbar">
        <button className="quiz-close-btn" onClick={onBack}>✕</button>
        <div className="quiz-bar-wrap">
          <div
            className="quiz-bar-fill"
            style={{ width: `${(qIndex / questions.length) * 100}%` }}
          />
        </div>
        <div className="quiz-lives">
          {Array.from({ length: 3 }, (_, i) => (
            <span key={i} className={`heart ${answers.filter(x => !x).length > i ? 'heart--lost' : ''}`}>❤️</span>
          ))}
        </div>
      </div>

      {/* Question body */}
      <div className="quiz-body">
        <p className="quiz-q-num">문제 {qIndex + 1}/{questions.length}</p>
        <p className="quiz-question">{currentQ.question}</p>

        <div className="options-list">
          {currentQ.options.map((opt, i) => {
            let mod = '';
            if (checked) {
              if (i === currentQ.correctIndex) mod = 'correct';
              else if (i === selected)          mod = 'wrong';
              else                               mod = 'dim';
            } else if (i === selected) {
              mod = 'selected';
            }
            return (
              <button
                key={i}
                className={`option-btn ${mod ? `option-btn--${mod}` : ''}`}
                onClick={() => handleSelect(i)}
                disabled={checked}
              >
                <span className="option-alpha">{String.fromCharCode(65 + i)}</span>
                <span className="option-text">{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Duolingo-style dynamic footer */}
      <div className={`quiz-footer quiz-footer--${footerState}`}>
        {footerState === 'idle' ? (
          <button
            className={`quiz-check-btn ${selected !== null ? 'quiz-check-btn--active' : 'quiz-check-btn--disabled'}`}
            onClick={handleCheck}
            disabled={selected === null}
          >
            확인
          </button>
        ) : (
          <div className="quiz-feedback-row">
            <div className="quiz-feedback-text">
              <p className="quiz-feedback-verdict">
                {isCorrect ? '🎉 정답이에요!' : '🥲 아쉬워요!'}
              </p>
              <p className="quiz-feedback-explain">{currentQ.explanation}</p>
            </div>
            <button className={`quiz-next-btn quiz-next-btn--${footerState}`} onClick={handleNext}>
              {qIndex + 1 < questions.length ? '다음 문제' : '결과 보기'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ResultScreen({ chapter, score, total, passed, onComplete, onRetry }) {
  const pct = Math.round((score / total) * 100);

  useEffect(() => {
    if (passed) {
      const t = setTimeout(() => sounds.xp(), 750);
      return () => clearTimeout(t);
    }
  }, [passed]);
  return (
    <div className="result-screen">
      <div className={`result-top ${passed ? 'result-top--pass' : 'result-top--fail'}`}>
        <div className="result-icon">{passed ? '🏆' : '😅'}</div>
        <h2 className="result-title">{passed ? '통과!' : '다시 도전!'}</h2>
        <p className="result-subtitle">
          {score}/{total} 정답 · {pct}%
        </p>
        <div className="result-bar-track">
          <div
            className={`result-bar-fill ${passed ? 'result-bar-fill--pass' : 'result-bar-fill--fail'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <div className="result-body">
        {passed ? (
          <>
            <div className="result-msg result-msg--pass">
              <strong>🌟 {chapter.title}</strong> 챕터 완료!<br />
              <span className="result-xp-badge">+100 XP 획득!</span>
            </div>
            <button className="result-cta result-cta--pass" onClick={onComplete}>
              다음 챕터 가기 →
            </button>
          </>
        ) : (
          <>
            <div className="result-msg result-msg--fail">
              70% 이상 맞혀야 통과예요.<br />한 번 더 해볼까요? 💪
            </div>
            <button className="result-cta result-cta--retry" onClick={onRetry}>
              다시 도전하기
            </button>
            <button className="result-cta result-cta--review" onClick={onRetry}>
              내용 다시 보기
            </button>
          </>
        )}
      </div>
    </div>
  );
}
