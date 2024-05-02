export default interface NoteRepository {
  getNotesByInstrument(instrumentId: string): string[];
  setNotesByInstrument(instrumentId: string, notes: string[]): void;
}
