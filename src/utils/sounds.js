class SoundSystem {
  constructor() {
    this.ctx      = null;
    this.master   = null;
    this.muted    = JSON.parse(localStorage.getItem('soundMuted') ?? 'false');
    this.bgmOn    = false;
    this.bgmNodes = [];
    this.bgmTimer = null;
  }

  _init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    this.ctx    = new (window.AudioContext || window.webkitAudioContext)();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.6;
    this.master.connect(this.ctx.destination);
  }

  setMuted(m) {
    this.muted = m;
    localStorage.setItem('soundMuted', JSON.stringify(m));
    if (this.master) this.master.gain.value = m ? 0 : 0.6;
  }

  _note(freq, type, t, dur, peak = 0.2) {
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(peak, t + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain); gain.connect(this.master);
    osc.start(t); osc.stop(t + dur + 0.02);
  }

  _sweep(f0, f1, type, t, dur, peak = 0.14) {
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f0, t);
    osc.frequency.linearRampToValueAtTime(f1, t + dur);
    gain.gain.setValueAtTime(peak, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain); gain.connect(this.master);
    osc.start(t); osc.stop(t + dur + 0.02);
  }

  /* ── 경쾌한 탭 소리 ── */
  click() {
    this._init();
    const t = this.ctx.currentTime;
    this._note(1200, 'sine', t, 0.06, 0.18);
    this._note(1600, 'sine', t + 0.02, 0.04, 0.08);
  }

  /* ── 슬라이드 전환 ── */
  slide() {
    this._init();
    const t = this.ctx.currentTime;
    this._sweep(600, 1000, 'sine', t, 0.09, 0.12);
  }

  /* ── 정답 — 밝고 경쾌한 3음 ── */
  correct() {
    this._init();
    const t = this.ctx.currentTime;
    this._note(523,  'sine', t,        0.15, 0.22); // C5
    this._note(659,  'sine', t + 0.1,  0.15, 0.22); // E5
    this._note(784,  'sine', t + 0.2,  0.25, 0.22); // G5
  }

  /* ── 오답 — 짧고 부드러운 버즈 ── */
  wrong() {
    this._init();
    const t = this.ctx.currentTime;
    this._sweep(320, 220, 'triangle', t, 0.25, 0.16);
  }

  /* ── 완료 팡파레 ── */
  complete() {
    this._init();
    const t = this.ctx.currentTime;
    [523, 659, 784, 1047, 1319].forEach((f, i) => {
      this._note(f, 'sine', t + i * 0.1, 0.4, 0.2);
    });
  }

  /* ── 챕터 잠금 해제 ── */
  unlock() {
    this._init();
    const t = this.ctx.currentTime;
    [392, 494, 587, 784, 988].forEach((f, i) => {
      this._note(f, 'triangle', t + i * 0.08, 0.28, 0.16);
    });
  }

  /* ── XP 획득 코인 ── */
  xp() {
    this._init();
    const t = this.ctx.currentTime;
    this._note(988,  'sine', t,        0.12, 0.16);
    this._note(1319, 'sine', t + 0.07, 0.18, 0.13);
    this._note(1568, 'sine', t + 0.13, 0.14, 0.10);
  }

  /* ── 퀴즈 시작 ── */
  quizStart() {
    this._init();
    const t = this.ctx.currentTime;
    [440, 554, 659, 880].forEach((f, i) => {
      this._note(f, 'sine', t + i * 0.09, 0.22, 0.16);
    });
  }

  /* ── BGM — 경쾌한 C장조 멜로디 ── */
  startBGM() {
    this._init();
    if (this.bgmOn) return;
    this.bgmOn = true;
    this._loopBGM(this.ctx.currentTime);
  }

  _loopBGM(start) {
    if (!this.bgmOn) return;
    const bpm  = 110;
    const beat = 60 / bpm;

    // 밝고 경쾌한 C장조 멜로디
    const melody = [
      [523, 0,    0.75], [659, 1,    0.5],  [784, 1.5,  0.5],
      [880, 2,    1.0],  [784, 3,    0.5],  [659, 3.5,  0.5],
      [523, 4,    0.75], [587, 5,    0.5],  [659, 5.5,  0.5],
      [784, 6,    1.5],  [659, 8,    0.5],  [784, 8.5,  0.5],
      [880, 9,    0.75], [988, 10,   0.5],  [880, 10.5, 0.5],
      [784, 11,   0.75], [659, 12,   0.5],  [523, 12.5, 1.5],
    ];

    const loopBeats = 14;

    melody.forEach(([freq, b, dur]) => {
      const osc  = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t    = start + b * beat;
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.028, t + 0.05);
      gain.gain.setValueAtTime(0.028, t + dur * beat - 0.06);
      gain.gain.linearRampToValueAtTime(0, t + dur * beat);
      osc.connect(gain); gain.connect(this.master);
      osc.start(t); osc.stop(t + dur * beat + 0.1);
      this.bgmNodes.push(osc);
    });

    // 베이스 C2
    const bass = this.ctx.createOscillator();
    const bg   = this.ctx.createGain();
    const bf   = this.ctx.createBiquadFilter();
    bass.type = 'sine';
    bass.frequency.value = 130.8;
    bf.type = 'lowpass'; bf.frequency.value = 300;
    bg.gain.setValueAtTime(0, start);
    bg.gain.linearRampToValueAtTime(0.04, start + 0.4);
    bg.gain.setValueAtTime(0.04, start + (loopBeats - 1) * beat);
    bg.gain.linearRampToValueAtTime(0, start + loopBeats * beat);
    bass.connect(bf); bf.connect(bg); bg.connect(this.master);
    bass.start(start); bass.stop(start + loopBeats * beat + 0.1);
    this.bgmNodes.push(bass);

    const loopMs = loopBeats * beat * 1000;
    this.bgmTimer = setTimeout(() => this._loopBGM(start + loopBeats * beat), loopMs - 150);
  }

  stopBGM() {
    this.bgmOn = false;
    clearTimeout(this.bgmTimer);
    this.bgmNodes.forEach(n => { try { n.stop(0); } catch {} });
    this.bgmNodes = [];
  }
}

export const sounds = new SoundSystem();
