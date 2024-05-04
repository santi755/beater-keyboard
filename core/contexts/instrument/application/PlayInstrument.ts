import { inject, injectable } from 'inversify';
import Instrument from '@core/contexts/instrument/domain/Instrument';
import type SoundPlayer from '../domain/SoundPlayer';
import { TYPES } from '@core/config/types';
import type InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';

@injectable()
export default class PlayInstrument {
  constructor(
    @inject(TYPES.SoundPlayer)
    private soundPlayer: SoundPlayer,
    @inject(TYPES.InstrumentRepository)
    private instrumentRepository: InstrumentRepository
  ) {}

  public async execute(note: string, duration?: string) {
    const selectedInstrument =
      await this.instrumentRepository.getSelectedInstrument();

    if (selectedInstrument === null) {
      throw new Error('No instrument selected');
    }

    this.soundPlayer.playSound(selectedInstrument, note, duration || '8n'); // TODO: Check what is the default duration
  }
}
