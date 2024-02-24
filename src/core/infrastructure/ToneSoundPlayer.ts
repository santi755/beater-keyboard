import * as Tone from "tone";
import SoundPlayer from "@/core/domain/SoundPlayer";

export default class ToneSoundPlayer implements SoundPlayer {
  private synth: Tone.PolySynth;

  constructor() {
    this.synth = new Tone.PolySynth(Tone.Synth, {
      oscillator: {
        type: "fmsquare",
        modulationType: "sawtooth",
        modulationIndex: 3,
        harmonicity: 3.4,
      },
      envelope: {
        attack: 0.001,
        decay: 0.1,
        sustain: 0.1,
        release: 0.1,
      },
    }).toDestination();
  }

  playSound(note: string, duration: string): void {
    this.synth.triggerAttackRelease(note, duration);
  }

  stopSound(note: string): void {
    this.synth.triggerRelease(note);
  }
}
