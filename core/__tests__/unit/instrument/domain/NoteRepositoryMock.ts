import { vi, expect } from 'vitest';

import NoteRepository from '@core/contexts/instrument/domain/NoteRepository';
import Note from '@core/contexts/instrument/domain/Note';
import InstrumentId from '@core/contexts/instrument/domain/InstrumentId';

export default class NoteRepositoryMock implements NoteRepository {
  private getNotesByInstrumentMock = vi.fn();
  private setNotesByInstrumentMock = vi.fn();
  private removeNoteByInstrumentMock = vi.fn();

  getNotesByInstrument(instrumentId: InstrumentId): Note[] {
    return this.getNotesByInstrumentMock(instrumentId);
  }

  setNotesByInstrument(instrumentId: InstrumentId, notes: Note[]): void {
    this.setNotesByInstrumentMock(instrumentId, notes);
  }

  removeNoteByInstrument(instrumentId: InstrumentId, note: Note): void {
    this.removeNoteByInstrumentMock(instrumentId, note);
  }

  shouldSetNotesByInstrument(instrumentId: string, notes: Note[]): void {
    expect(this.setNotesByInstrumentMock).toHaveBeenCalledWith(
      instrumentId,
      notes
    );
  }

  shouldNotSetNotesByInstrument(): void {
    expect(this.setNotesByInstrumentMock).not.toHaveBeenCalled();
  }

  shouldRemoveNoteByInstrument(instrumentId: string, note: Note): void {
    expect(this.removeNoteByInstrumentMock).toHaveBeenCalledWith(
      instrumentId,
      note
    );
  }

  shouldNotRemoveNoteByInstrument(): void {
    expect(this.removeNoteByInstrumentMock).not.toHaveBeenCalled();
  }
}
