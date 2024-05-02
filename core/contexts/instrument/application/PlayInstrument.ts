import { inject, injectable } from 'inversify';
import Instrument from '@core/contexts/instrument/domain/Instrument';
import type SoundPlayer from '../domain/SoundPlayer';
import { TYPES } from '@core/config/types';

@injectable()
export default class PlayInstrument {
  constructor(
    @inject(TYPES.SoundPlayer)
    private soundPlayer: SoundPlayer
  ) {}

  public execute(instrument: Instrument, note: string, duration?: string) {
    this.soundPlayer.playSound(instrument, note, duration || '8n'); // TODO: Check what is the default duration
  }
}
