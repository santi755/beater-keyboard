import NotesService from '@/core/contexts/board/application/NotesService';
import JsonNoteProvider from '@/core/contexts/board/infrastructure/JsonNoteProvider';

import { KeyboardOctave } from '@/components/keyboard/patterns/KeyboardOctave';

export const Keyboard = () => {
  const noteProvider = new JsonNoteProvider();
  const notesService = new NotesService(noteProvider);

  const keyboardOctaves = noteProvider.getOctaves();
  const notesAvailable = notesService.getNotesAvailable();

  return keyboardOctaves.map((octave) => (
    <KeyboardOctave
      key={octave}
      octave={octave}
      notesAvailable={notesAvailable}
    />
  ));
};
