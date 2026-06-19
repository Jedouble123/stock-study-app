import { useState, useEffect, useCallback } from 'react';
import { sounds } from '../utils/sounds';
import './QuizPage.css';

const PASS_RATIO = 0.7;
const MAX_LIVES  = 3;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── ComboToast ─────────────────────────────────── */
function ComboToast({ combo }) {
  if (combo < 2) return null;
  const msgs = ['', '', '2연속 🔥', '3연속 🔥🔥', '4연속 💥', '5연속 ⚡️'];
  const label = msgs[combo] ?? `${combo}연속 🔥`;
  return <div className="combo-toast" key={combo}>{label}</div>;
}

/* ── HintBox ────────────────────────────────────── */
function HintBox({ hint }) {
  return (
    <div className="hint-box">
      <span className="hint-icon">💡</span>
      <span className="hint-text">{hint}</span>
    </div>
  );
}

/* ── GameOverScreen ─────────────────────────────── */
function GameOverScreen({ onRestart, onBack }) {
  return (
    <div className="result-screen">
      <div className="result-top result-top--fail">
        <div className="result-icon">💔</div>
        <h2 className="result-title">목숨이 다 됐어요!</h2>
        <p className="result-subtitle">틀린 문제가 {MAX_LIVES}개 이상이에요</p>
      </div>
      <div className="result-body">
        <div className="result-msg result-msg--fail">
          내용을 다시 복습하고 도전해봐요! 💪
        </div>
        <button className="result-cta result-cta--retry" onClick={onRestart}>
          다시 도전하기
        </button>
        <button className="result-cta result-cta--review" onClick={onBack}>
          내용 다시 보기
        </button>
      </div>
    </div>
  );
}

/* ── QuizPage ───────────────────────────────────── */
export default function QuizPage({ chapter, onComplete, onRetry, onBack }) {
  const [questions,    setQuestions]    = useState(() => shuffle(chapter.quiz));
  const [qIndex,       setQIndex]       = useState(0);
  const [selected,     setSelected]     = useState(null);
  const [checked,      setChecked]      = useState(false);
  const [answers,      setAnswers]      = useState([]);
  const [phase,        setPhase]        = useState('question');
  const [combo,        setCombo]        = useState(0);
  const [maxCombo,     setMaxCombo]     = useState(0);
  const [hintVisible,  setHintVisible]  = useState(false);
  const [animKey,      setAnimKey]      = useState(0);

  const currentQ   = questions[qIndex];
  const isCorrect  = checked && selected === currentQ?.correctIndex;
  const wrongCount = answers.filter(a => !a.correct).length;

  const resetQuiz = useCallback(() => {
    setQuestions(shuffle(chapter.quiz));
    setQIndex(0);
    setSelected(null);
    setChecked(false);
    setAnswers([]);
    setPhase('question');
    setCombo(0);
    setMaxCombo(0);
    setHintVisible(false);
    setAnimKey(k => k + 1);
  }, [chapter.quiz]);

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

  const handleHint = () => {
    if (checked || hintVisible) return;
    sounds.click();
    setHintVisible(true);
  };

  const handleNext = useCallback(() => {
    const correct     = selected === currentQ.correctIndex;
    const newCombo    = correct ? combo + 1 : 0;
    const newMaxCombo = Math.max(maxCombo, newCombo);
    const newAnswers  = [...answers, {
      correct,
      selectedIdx: selected,
      correctIdx:  currentQ.correctIndex,
      question:    currentQ.question,
      options:     currentQ.options,
      explanation: currentQ.explanation,
    }];

    setCombo(newCombo);
    setMaxCombo(newMaxCombo);
    setAnswers(newAnswers);

    const newWrongCount = newAnswers.filter(a => !a.correct).length;
    if (newWrongCount >= MAX_LIVES) {
      setPhase('gameover');
      return;
    }

    if (qIndex + 1 < questions.length) {
      sounds.slide();
      setQIndex(q => q + 1);
      setSelected(null);
      setChecked(false);
      setHintVisible(false);
      setAnimKey(k => k + 1);
    } else {
      const score   = newAnswers.filter(a => a.correct).length;
      const didPass = score / questions.length >= PASS_RATIO;
      if (didPass) sounds.complete();
      setPhase('result');
    }
  }, [selected, currentQ, combo, maxCombo, answers, qIndex, questions.length]);

  const score  = answers.filter(a => a.correct).length;
  const passed = phase === 'result' && score / questions.length >= PASS_RATIO;

  if (phase === 'gameover') {
    return <GameOverScreen onRestart={resetQuiz} onBack={onRetry} />;
  }

  if (phase === 'result') {
    return (
      <ResultScreen
        chapter={chapter}
        score={score}
        total={questions.length}
        passed={passed}
        maxCombo={maxCombo}
        answers={answers}
        questions={questions}
        onComplete={onComplete}
        onRestart={resetQuiz}
        onBack={onRetry}
      />
    );
  }

  const footerState = !checked ? 'idle' : isCorrect ? 'correct' : 'wrong';

  return (
    <div className="quiz-page">
      {/* Top bar */}
      <div className="quiz-topbar">
        <button className="quiz-close-btn" onClick={onBack}>✕</button>
        <div className="quiz-bar-wrap">
          <div className="quiz-bar-fill" style={{ width: `${(qIndex / questions.length) * 100}%` }} />
        </div>
        <div className="quiz-lives">
          {Array.from({ length: MAX_LIVES }, (_, i) => (
            <span key={i} className={`heart ${wrongCount > i ? 'heart--lost' : ''}`}>❤️</span>
          ))}
        </div>
      </div>

      {/* Question body */}
      <div className="quiz-body" key={animKey}>
        <div className="quiz-q-meta">
          <p className="quiz-q-num">문제 {qIndex + 1}/{questions.length}</p>
          {currentQ.hint && !checked && (
            <button
              className={`hint-btn ${hintVisible ? 'hint-btn--used' : ''}`}
              onClick={handleHint}
              disabled={hintVisible}
            >
              {hintVisible ? '💡 힌트 확인됨' : '💡 힌트 보기'}
            </button>
          )}
        </div>

        <p className="quiz-question">{currentQ.question}</p>

        {hintVisible && <HintBox hint={currentQ.hint} />}

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
              <div className="quiz-feedback-top">
                <p className="quiz-feedback-verdict">
                  {isCorrect ? '🎉 정답이에요!' : '🥲 아쉬워요!'}
                </p>
                {isCorrect && <ComboToast combo={combo + 1} />}
              </div>
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

/* ── ResultScreen ───────────────────────────────── */
function ResultScreen({ chapter, score, total, passed, maxCombo, answers, questions, onComplete, onRestart, onBack }) {
  const pct = Math.round((score / total) * 100);
  const xp  = passed ? 100 + maxCombo * 10 : 0;
  const [barWidth, setBarWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setBarWidth(pct), 80);
    return () => clearTimeout(t);
  }, [pct]);

  useEffect(() => {
    if (passed) {
      const t = setTimeout(() => sounds.xp(), 750);
      return () => clearTimeout(t);
    }
  }, [passed]);

  return (
    <div className="result-screen">
      {/* Hero */}
      <div className={`result-top ${passed ? 'result-top--pass' : 'result-top--fail'}`}>
        {passed && <div className="confetti-wrap" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => (
            <span key={i} className="confetti-dot" style={{ '--i': i }} />
          ))}
        </div>}
        <div className="result-icon">{passed ? '🏆' : '😅'}</div>
        <h2 className="result-title">{passed ? '통과!' : '다시 도전!'}</h2>
        <p className="result-subtitle">{score}/{total} 정답 · {pct}%</p>
        <div className="result-bar-track">
          <div
            className={`result-bar-fill ${passed ? 'result-bar-fill--pass' : 'result-bar-fill--fail'}`}
            style={{ width: `${barWidth}%` }}
          />
        </div>
        {passed && maxCombo >= 2 && (
          <p className="result-combo-badge">🔥 최고 콤보 {maxCombo}연속!</p>
        )}
      </div>

      {/* Body */}
      <div className="result-body">
        {passed ? (
          <>
            <div className="result-msg result-msg--pass">
              <strong>🌟 {chapter.title}</strong> 챕터 완료!
              <div className="result-xp-row">
                <span className="result-xp-badge">+{xp} XP</span>
                {maxCombo >= 2 && <span className="result-xp-bonus">콤보 보너스 +{maxCombo * 10} XP 포함!</span>}
              </div>
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
            <button className="result-cta result-cta--retry" onClick={onRestart}>
              다시 도전하기
            </button>
            <button className="result-cta result-cta--review" onClick={onBack}>
              내용 다시 보기
            </button>
          </>
        )}

        {/* 문제 리뷰 */}
        <div className="review-section">
          <p className="review-title">📋 문제 리뷰</p>
          {answers.map((ans, i) => (
            <div key={i} className={`review-card ${ans.correct ? 'review-card--ok' : 'review-card--ng'}`}>
              <div className="review-card-top">
                <span className="review-badge">{ans.correct ? '✅' : '❌'}</span>
                <span className="review-q-text">{questions[i].question}</span>
              </div>
              {!ans.correct && (
                <div className="review-answer">
                  <span className="review-my">내 답: {ans.options[ans.selectedIdx]}</span>
                  <span className="review-correct">정답: {ans.options[ans.correctIdx]}</span>
                </div>
              )}
              {ans.explanation && (
                <p className="review-explanation">{ans.explanation}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
