import Tone from 'tone';
import { injectable } from 'inversify';

import SoundPlayer from '@core/contexts/instrument/domain/SoundPlayer';
import Instrument from '@core/contexts/instrument/domain/Instrument';
import instrumentConfigurations from '@core/contexts/instrument/infrastructure/configurations/InstrumentConfigurations';

@injectable()
class ToneSoundPlayer implements SoundPlayer {
  constructor() {
    console.log('ToneSoundPlayer montado en singleton!');
    Tone?.Transport.start();
  }

  public playSound(
    instrument: Instrument,
    note: string,
    duration: string
  ): void {
    const instrumentConfig = instrumentConfigurations.get(instrument.name);
    const synth = new Tone.Synth(instrumentConfig).toDestination();
    synth.triggerAttackRelease(note, duration);
  }
}

export default ToneSoundPlayer;
