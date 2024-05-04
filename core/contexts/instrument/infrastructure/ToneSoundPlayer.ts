import * as Tone from 'tone';
import { injectable } from 'inversify';

import SoundPlayer from '@core/contexts/instrument/domain/SoundPlayer';
import Instrument from '@core/contexts/instrument/domain/Instrument';
import instrumentConfigurations from '@core/contexts/instrument/infrastructure/configurations/InstrumentConfigurations';

@injectable()
class ToneSoundPlayer implements SoundPlayer {
  constructor() {
    console.log('ToneSoundPlayer montado en singleton!');
  }

  public playSound(
    instrument: Instrument,
    note: string,
    duration: string
  ): void {
    const instrumentConfig = instrumentConfigurations.get(instrument.name);
    const currentSynth = new Tone.Synth(instrumentConfig).toDestination();
    currentSynth.triggerAttackRelease(note, duration);
  }
}

export default ToneSoundPlayer;
