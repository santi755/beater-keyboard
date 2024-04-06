import { PolySynth, Synth } from 'tone';
import SoundPlayer from '@core/contexts/instrument/domain/SoundPlayer';

export default class ToneSoundPlayer implements SoundPlayer {
  constructor(
    private synth: PolySynth = new PolySynth(Synth).toDestination()
  ) {}

  initializeInstrument(config: any): any {
    this.synth.set(config);
  }

  playSound(note: string, duration: string = '10m'): void {
    this.synth.triggerAttackRelease(note, duration);
  }

  stopSound(note: string): void {
    this.synth.triggerRelease(note);
  }
}
