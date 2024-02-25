import * as Tone from 'tone';
import SoundPlayer from '@/core/domain/SoundPlayer';

export default class ToneSoundPlayer implements SoundPlayer {
  constructor(
    private synth: Tone.PolySynth = new Tone.PolySynth(
      Tone.Synth
    ).toDestination()
  ) {}

  initializeInstrument(config: any): any {
    this.synth.set(config);
  }

  playSound(note: string, duration: string): void {
    const INFINITE_DURATION = '10m';
    this.synth.triggerAttackRelease(note, INFINITE_DURATION);
  }

  stopSound(note: string): void {
    this.synth.triggerRelease(note);
  }
}
