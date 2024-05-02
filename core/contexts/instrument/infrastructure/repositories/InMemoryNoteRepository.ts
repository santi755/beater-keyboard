import NoteRepository from '@core/contexts/instrument/domain/NoteRepository';
import { injectable } from 'inversify';

@injectable()
class InMemoryNoteRepository implements NoteRepository {
  private notesByInstrument: Map<string, string[]> = new Map();

  getNotesByInstrument(instrumentId: string): string[] {
    return this.notesByInstrument.get(instrumentId) || [];
  }

  setNotesByInstrument(instrumentId: string, notes: string[]): void {
    this.notesByInstrument.set(instrumentId, notes);
  }
}

export default InMemoryNoteRepository;
