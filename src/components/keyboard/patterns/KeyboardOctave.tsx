import InstrumentService from '@core/contexts/instrument/domain/InstrumentService';

import { useInstrument } from '@src/app/sequencer/page';

import { KeyButton } from '@src/components/keyboard/atoms/KeyButton';

interface KeyButtonProps {
  octave: number;
  notesAvailable: string[];
}

export const KeyboardOctave = ({ octave, notesAvailable }: KeyButtonProps) => {
  const instrument = useInstrument();

  return (
    <div className='grid grid-cols-1'>
      {
        instrument
          ? notesAvailable.map((note) =>
              BuildKeyButton(note, octave, instrument)
            )
          : null // TODO: Loading
      }
    </div>
  );
};

function BuildKeyButton(
  note: string,
  octave: number,
  instrument: InstrumentService
) {
  const keyNote = `${note}${octave}`;
  const type = note.includes('#') ? 'black' : 'white';
  return (
    <KeyButton
      key={keyNote}
      text={keyNote}
      onMouseDown={() => instrument.playSound(keyNote)}
      onMouseUp={() => instrument.stopSound(keyNote)}
      onMouseLeave={() => instrument.stopSound(keyNote)}
      noteType={type}
    />
  );
}
