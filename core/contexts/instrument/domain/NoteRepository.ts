import Note from '@core/contexts/instrument/domain/Note';
import InstrumentId from '@core/contexts/instrument/domain/InstrumentId';

export default interface NoteRepository {
  getNotesByInstrument(instrumentId: InstrumentId): Note[];
  setNotesByInstrument(instrumentId: InstrumentId, notes: Note[]): void;
}
