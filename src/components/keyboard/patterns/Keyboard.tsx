import { TYPES } from '@core/config/types';
import { useInjection } from '@src/config/ioc.react';

import ListKeyboardNotes from '@core/contexts/instrument/application/ListKeyboardNotes';

import { KeyButton } from '@src/components/keyboard/atoms/KeyButton';

export const Keyboard = () => {
  const listKeyboardNotes = useInjection<ListKeyboardNotes>(
    TYPES.ListKeyboardNotes
  );

  const notesAvailable = listKeyboardNotes.execute();

  return (
    <div className='grid grid-cols-1'>
      {notesAvailable.map((note) => BuildKeyButton(note))}
    </div>
  );
};

function BuildKeyButton(note: string) {
  const type = note.includes('#') ? 'black' : 'white';
  return (
    <KeyButton
      key={note}
      text={note}
      //onMouseDown={() => playInstrument.execute(keyNote)}
      // onMouseUp={() => instrument.stopSound(keyNote)}
      // onMouseLeave={() => instrument.stopSound(keyNote)}
      noteType={type}
    />
  );
}
