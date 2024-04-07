import Instrument from '../domain/Instrument';
import SoundPlayer from '../domain/SoundPlayer';
import InstrumentConfigFactory from '../infrastructure/InstrumentConfigFactory';

export default class PlayInstrument {
  constructor(private soundPplayer: SoundPlayer) {}

  public execute(note: string, duration?: string) {
    this.soundPplayer.playSound(note, duration);
  }
}
