import NoteInitializator from '@core/contexts/instrument/infrastructure/configurations/NoteInitializator';
import Note from '@core/contexts/instrument/domain/Note';

export default class NoteFactory {
  static createNoteFromCoordinates(x: number, y: number): Note {
    const notes = NoteInitializator.initialize();
    const note = notes[x];

    return new Note(x, note, 2); // TODO: Check this logic and complete duration
  }
}
