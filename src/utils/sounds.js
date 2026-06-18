class SoundSystem {
  constructor() {
    this.ctx     = null;
    this.master  = null;
    this.muted   = JSON.parse(localStorage.getItem('soundMuted') ?? 'false');
    this.bgmOn   = false;
    this.bgmNodes = [];
    this.bgmTimer = null;
  }

  /* ── init ──────────────────────────────────────── */
  _init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    this.ctx    = new (window.AudioContext || window.webkitAudioContext)();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.55;
    this.master.connect(this.ctx.destination);
  }

  setMuted(m) {
    this.muted = m;
    localStorage.setItem('soundMuted', JSON.stringify(m));
    if (this.master) this.master.gain.value = m ? 0 : 0.55;
  }

  /* ── helpers ───────────────────────────────────── */
  _note(freq, type, t, dur, peak = 0.18) {
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(peak, t + Math.min(0.025, dur * 0.15));
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.01);
  }

  _sweep(f0, f1, type, t, dur, peak = 0.12) {
    const osc  = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f0, t);
    osc.frequency.linearRampToValueAtTime(f1, t + dur);
    gain.gain.setValueAtTime(peak, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(t);
    osc.stop(t + dur + 0.01);
  }

  /* ── sound effects ─────────────────────────────── */
  click() {
    this._init();
    const t = this.ctx.currentTime;
    this._note(700, 'sine', t, 0.07, 0.14);
  }

  slide() {
    this._init();
    const t = this.ctx.currentTime;
    this._sweep(380, 560, 'sine', t, 0.12, 0.10);
  }

  /* Duolingo-style two-note ding */
  correct() {
    this._init();
    const t = this.ctx.currentTime;
    this._note(523, 'sine', t,        0.28, 0.20); // C5
    this._note(659, 'sine', t + 0.15, 0.38, 0.20); // E5
  }

  /* Low descending buzz */
  wrong() {
    this._init();
    const t = this.ctx.currentTime;
    const osc    = this.ctx.createOscillator();
    const gain   = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, t);
    osc.frequency.linearRampToValueAtTime(180, t + 0.4);
    filter.type = 'lowpass';
    filter.frequency.value = 480;
    gain.gain.setValueAtTime(0.13, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.42);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    osc.start(t);
    osc.stop(t + 0.44);
  }

  /* Victory fanfare */
  complete() {
    this._init();
    const t = this.ctx.currentTime;
    [523, 659, 784, 1047].forEach((f, i) => {
      this._note(f, 'sine', t + i * 0.13, 0.5, 0.22);
    });
  }

  /* Ascending arpeggio — chapter unlock */
  unlock() {
    this._init();
    const t = this.ctx.currentTime;
    [261, 329, 392, 523, 659].forEach((f, i) => {
      this._note(f, 'triangle', t + i * 0.09, 0.32, 0.15);
    });
  }

  /* Coin ping — XP gain */
  xp() {
    this._init();
    const t = this.ctx.currentTime;
    this._note(880,  'sine', t,        0.18, 0.14);
    this._note(1320, 'sine', t + 0.08, 0.22, 0.11);
  }

  /* Quiz start jingle */
  quizStart() {
    this._init();
    const t = this.ctx.currentTime;
    [392, 523, 659].forEach((f, i) => {
      this._note(f, 'sine', t + i * 0.1, 0.3, 0.14);
    });
  }

  /* ── Background music ──────────────────────────── */
  startBGM() {
    this._init();
    if (this.bgmOn) return;
    this.bgmOn = true;
    this._loopBGM(this.ctx.currentTime);
  }

  _loopBGM(start) {
    if (!this.bgmOn) return;
    const bpm  = 88;
    const beat = 60 / bpm;

    // C major pentatonic melody: [freq, startBeat, durationBeats]
    const melody = [
      [261.6, 0,    1.0],
      [329.6, 1.5,  0.5],
      [392.0, 2.5,  1.0],
      [440.0, 4.0,  0.5],
      [392.0, 5.0,  0.5],
      [329.6, 6.0,  0.5],
      [261.6, 7.0,  1.5],
      [329.6, 9.0,  0.5],
      [392.0, 10.0, 1.0],
      [523.0, 11.5, 0.5],
      [392.0, 12.5, 0.5],
      [261.6, 13.0, 2.0],
    ];

    const loopBeats = 15;

    melody.forEach(([freq, b, dur]) => {
      const osc  = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      const t = start + b * beat;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.032, t + 0.07);
      gain.gain.setValueAtTime(0.032, t + dur * beat - 0.07);
      gain.gain.linearRampToValueAtTime(0, t + dur * beat);
      osc.connect(gain);
      gain.connect(this.master);
      osc.start(t);
      osc.stop(t + dur * beat + 0.1);
      this.bgmNodes.push(osc);
    });

    // Bass pad – C3 drone
    const bass      = this.ctx.createOscillator();
    const bassGain  = this.ctx.createGain();
    const bassFilter = this.ctx.createBiquadFilter();
    bass.type = 'sine';
    bass.frequency.value = 130.8;
    bassFilter.type = 'lowpass';
    bassFilter.frequency.value = 280;
    bassGain.gain.setValueAtTime(0, start);
    bassGain.gain.linearRampToValueAtTime(0.045, start + 0.6);
    bassGain.gain.setValueAtTime(0.045, start + (loopBeats - 1) * beat);
    bassGain.gain.linearRampToValueAtTime(0, start + loopBeats * beat);
    bass.connect(bassFilter);
    bassFilter.connect(bassGain);
    bassGain.connect(this.master);
    bass.start(start);
    bass.stop(start + loopBeats * beat + 0.1);
    this.bgmNodes.push(bass);

    // Schedule next iteration
    const loopMs = loopBeats * beat * 1000;
    this.bgmTimer = setTimeout(() => this._loopBGM(start + loopBeats * beat), loopMs - 180);
  }

  stopBGM() {
    this.bgmOn = false;
    clearTimeout(this.bgmTimer);
    this.bgmNodes.forEach(n => { try { n.stop(0); } catch {} });
    this.bgmNodes = [];
  }
}

export const sounds = new SoundSystem();
