import { inject, injectable } from 'inversify';
import Instrument from '@core/contexts/instrument/domain/Instrument';
import type SoundPlayer from '../domain/SoundPlayer';
import { TYPES } from '@core/config/types';
import Note from '@core/contexts/instrument/domain/Note';
import type NoteRepository from '@core/contexts/instrument/domain/NoteRepository';

@injectable()
export default class ListNotesByInstrument {
  constructor(
    @inject(TYPES.NoteRepository)
    private noteRepository: NoteRepository
  ) {}

  public execute(instrument: Instrument) {
    return this.noteRepository.getNotesByInstrument(instrument.id);
  }
}
