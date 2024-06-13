import Note from '@core/contexts/instrument/domain/Note';

export default interface NoteCreatedEvent {
  x: number;
  y: number;
  note: Note;
}
