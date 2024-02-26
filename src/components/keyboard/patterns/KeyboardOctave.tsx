import InstrumentService from '@/core/domain/InstrumentService';

import { useInstrument } from '@/app/sequencer/page';
import { keyboardNotes, Note } from '@/config/noteList';

import { KeyButton } from '@/components/keyboard/atoms/KeyButton';

interface KeyButtonProps {
  octave: number;
}

export const KeyboardOctave = ({ ...props }: KeyButtonProps) => {

  const instrument = useInstrument();

  return (
    <div className='grid grid-cols-1'>
      {
      instrument
        ? (keyboardNotes.map((note) => (BuildKeyButton(note, props.octave, instrument))))
        : (null) // TODO: Loading
      }
    </div>
  );
};

function BuildKeyButton(note: Note, octave: number, instrument: InstrumentService) {
  const keyNote = `${note.value}${octave}`;
  return (
    <KeyButton
      key={keyNote}
      text={keyNote}
      onMouseDown={() => instrument.playSound(keyNote)}
      onMouseUp={() => instrument.stopSound(keyNote)}
      onMouseLeave={() =>
        instrument.stopSound(keyNote)
      }
      noteType={note.type}
    />
  );

}