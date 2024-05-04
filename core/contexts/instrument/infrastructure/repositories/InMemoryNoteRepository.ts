import NoteRepository from '@core/contexts/instrument/domain/NoteRepository';
import { injectable } from 'inversify';
import Note from '@core/contexts/instrument/domain/Note';
import InstrumentId from '@core/contexts/instrument/domain/InstrumentId';

@injectable()
class InMemoryNoteRepository implements NoteRepository {
  private notesByInstrument: Map<InstrumentId, Note[]> = new Map();

  getNotesByInstrument(instrumentId: InstrumentId): Note[] {
    return this.notesByInstrument.get(instrumentId) || [];
  }

  setNotesByInstrument(instrumentId: InstrumentId, notes: Note[]): void {
    this.notesByInstrument.set(instrumentId, notes);
  }

  removeNoteByInstrument(instrumentId: InstrumentId, note: Note): void {
    throw new Error('Method not implemented.');
  }
}

export default InMemoryNoteRepository;
