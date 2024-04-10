import { inject, injectable } from 'inversify';
import Instrument from '../domain/Instrument';
import type SoundPlayer from '../domain/SoundPlayer';
import InstrumentConfigFactory from '../infrastructure/InstrumentConfigFactory';
import { TYPES } from '@src/config/types';

@injectable()
export default class PlayInstrument {
  constructor(
    @inject(TYPES.SoundPlayer)
    private soundPplayer: SoundPlayer
  ) {}

  public execute(note: string, duration?: string) {
    this.soundPplayer.playSound(note, duration);
  }
}
