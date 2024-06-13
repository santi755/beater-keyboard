import NoteInitializator from '@core/contexts/instrument/infrastructure/configurations/NoteInitializator';
import Note from '@core/contexts/instrument/domain/Note';

import { CELL_WIDTH } from '@core/contexts/board/infrastructure/configurations/BoardConfigurations';

export default class NoteFactory {
  static createNoteFromCoordinates(x: number, y: number): Note {
    const notes = NoteInitializator.initialize();
    const note = notes[x];
    const step = Math.floor(x / CELL_WIDTH);

    return new Note(step, note, 2); // TODO: Check this logic and complete duration
  }

  static createCoordinatesFromNote(note: Note): { x: number; y: number } {
    console.log('note', note);
    const x = note.step * CELL_WIDTH;
    const y = 0; // TODO: Check this logic

    return { x, y };
  }
}
