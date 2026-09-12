/**
 * Soft romantic ambient chime & arpeggio player using Web Audio API.
 * Completely self-contained, no network or external audio assets needed.
 */

class RomanticAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private loopTimeout: number | null = null;
  private masterGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a gentle warm piano/bell tone
  private playNote(freq: number, startTime: number, duration: number, volume = 0.25) {
    if (!this.ctx || !this.masterGain) return;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Warm sine + subtle triangle for a music box / soft rhodes sound
    osc1.type = 'sine';
    osc2.type = 'triangle';

    osc1.frequency.setValueAtTime(freq, startTime);
    osc2.frequency.setValueAtTime(freq * 2, startTime); // Octave overtone

    // Soft attack, gentle exponential decay
    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.exponentialRampToValueAtTime(volume, startTime + 0.04);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc1.connect(noteGain);
    osc2.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc1.start(startTime);
    osc2.start(startTime);
    osc1.stop(startTime + duration);
    osc2.stop(startTime + duration);
  }

  // A romantic progression: Cmaj9 -> Am9 -> Fmaj7 -> Gsus4
  public startRomanticMelody(onPlayStateChange?: (playing: boolean) => void) {
    try {
      this.initContext();
      if (!this.ctx) return;

      this.isPlaying = true;
      if (onPlayStateChange) onPlayStateChange(true);

      const progressions = [
        // Cmaj9 (C4, E4, G4, B4, D5)
        [261.63, 329.63, 392.00, 493.88, 587.33],
        // Am9 (A3, C4, E4, G4, B4)
        [220.00, 261.63, 329.63, 392.00, 493.88],
        // Fmaj7 (F3, A3, C4, E4, G4)
        [174.61, 220.00, 261.63, 329.63, 392.00],
        // Gsus4 -> G (G3, C4, D4, G4, B4)
        [196.00, 261.63, 293.66, 392.00, 493.88]
      ];

      let chordIndex = 0;

      const scheduleChord = () => {
        if (!this.isPlaying || !this.ctx) return;

        const chord = progressions[chordIndex % progressions.length];
        const now = this.ctx.currentTime;

        // Arpeggiate notes gracefully
        chord.forEach((freq, idx) => {
          const noteTime = now + idx * 0.45;
          const duration = 2.4 - idx * 0.15;
          this.playNote(freq, noteTime, duration, 0.22);
        });

        // Add a gentle sparkle note at the top
        const sparkleFreq = chord[chord.length - 1] * 1.5;
        this.playNote(sparkleFreq, now + 1.6, 1.8, 0.12);

        chordIndex++;
        // Schedule next chord in ~3.8 seconds
        this.loopTimeout = window.setTimeout(scheduleChord, 3800);
      };

      scheduleChord();
    } catch (e) {
      console.warn('Audio could not be initialized yet:', e);
    }
  }

  public stopRomanticMelody(onPlayStateChange?: (playing: boolean) => void) {
    this.isPlaying = false;
    if (this.loopTimeout) {
      clearTimeout(this.loopTimeout);
      this.loopTimeout = null;
    }
    if (onPlayStateChange) onPlayStateChange(false);
  }

  public toggle(onPlayStateChange?: (playing: boolean) => void) {
    if (this.isPlaying) {
      this.stopRomanticMelody(onPlayStateChange);
    } else {
      this.startRomanticMelody(onPlayStateChange);
    }
  }

  public isMelodyPlaying(): boolean {
    return this.isPlaying;
  }

  // Celebratory sound when "SIM! ❤️" is clicked
  public playCelebrationFanfare() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      const notes = [
        { freq: 523.25, time: 0, dur: 0.3 },     // C5
        { freq: 659.25, time: 0.15, dur: 0.3 },  // E5
        { freq: 783.99, time: 0.3, dur: 0.35 },  // G5
        { freq: 1046.50, time: 0.45, dur: 0.8 }, // C6
        { freq: 1318.51, time: 0.65, dur: 1.2 }  // E6
      ];

      notes.forEach(n => {
        this.playNote(n.freq, now + n.time, n.dur, 0.35);
      });
    } catch {
      // ignore
    }
  }
}

export const romanticAudio = new RomanticAudioEngine();
