import { inject, injectable } from 'inversify';
import Instrument from '@core/contexts/instrument/domain/Instrument';
import { TYPES } from '@core/config/types';
import type NoteRepository from '@core/contexts/instrument/domain/NoteRepository';

@injectable()
export default class AddNoteByInstrument {
  constructor(
    @inject(TYPES.NoteRepository)
    private noteRepository: NoteRepository
  ) {}

  public execute(
    instrument: Instrument,
    note: string,
    duration: number,
    step: number
  ) {
    const currentNote = this.noteRepository
      .getNotesByInstrument(instrument.id)
      .find((n) => n.step === step);

    if (!currentNote) {
      throw new Error('Note not found');
    }

    this.noteRepository.removeNoteByInstrument(instrument.id, currentNote);
  }
}
