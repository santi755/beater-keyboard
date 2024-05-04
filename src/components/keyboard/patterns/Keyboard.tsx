import { TYPES } from '@core/config/types';
import { useInjection } from '@src/config/ioc.react';

import ListKeyboardNotes from '@core/contexts/instrument/application/ListKeyboardNotes';

import { KeyButton } from '@src/components/keyboard/atoms/KeyButton';
import PlayInstrument from '@core/contexts/instrument/application/PlayInstrument';

export const Keyboard = () => {
  const listKeyboardNotes = useInjection<ListKeyboardNotes>(
    TYPES.ListKeyboardNotes
  );

  const playInstrument = useInjection<PlayInstrument>(TYPES.PlayInstrument);

  const notesAvailable = listKeyboardNotes.execute();

  function BuildKeyButton(note: string) {
    const type = note.includes('#') ? 'black' : 'white';
    return (
      <KeyButton
        key={note}
        text={note}
        onMouseDown={() => playInstrument.execute(note)}
        // onMouseUp={() => instrument.stopSound(keyNote)}
        // onMouseLeave={() => instrument.stopSound(keyNote)}
        noteType={type}
      />
    );
  }

  return (
    <div className='grid grid-cols-1'>
      {notesAvailable.map((note) => BuildKeyButton(note))}
    </div>
  );
};
