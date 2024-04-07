import { PolySynth, Synth } from 'tone';
import SoundPlayer from '@core/contexts/instrument/domain/SoundPlayer';
import Instrument from '@core/contexts/instrument/domain/Instrument';
import InstrumentConfigFactory from '@core/contexts/instrument/infrastructure/InstrumentConfigFactory';

export default class ToneSoundPlayer implements SoundPlayer {
  constructor(
    private instrument: Instrument,
    private synth: PolySynth = new PolySynth(Synth).toDestination()
  ) {
    const config = InstrumentConfigFactory.create(instrument);
    this.synth.set(config);
  }

  playSound(note: string, duration: string = '10m'): void {
    this.synth.triggerAttackRelease(note, duration);
  }

  stopSound(note: string): void {
    this.synth.triggerRelease(note);
  }
}
