import { useBoardStore } from '@src/store';

import { KeyboardOctave } from '@src/components/keyboard/patterns/KeyboardOctave';

export const Keyboard = () => {
  const board = useBoardStore((state) => state.board);

  const keyboardOctaves = board?.getOctaves() || [];
  const notesAvailable = board?.getNotesAvailable() || [];

  return keyboardOctaves.map((octave) => (
    <KeyboardOctave
      key={octave}
      octave={octave}
      notesAvailable={notesAvailable}
    />
  ));
};
