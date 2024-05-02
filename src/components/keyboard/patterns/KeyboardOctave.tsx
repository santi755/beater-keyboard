import PlayInstrument from '@core/contexts/instrument/application/PlayInstrument';
import ToneSoundPlayer from '@core/contexts/instrument/infrastructure/ToneSoundPlayer';

import { useInstrument } from '@src/app/sequencer/page';

import { KeyButton } from '@src/components/keyboard/atoms/KeyButton';

interface KeyButtonProps {
  octave: number;
  notesAvailable: string[];
}

export const KeyboardOctave = ({ octave, notesAvailable }: KeyButtonProps) => {
  const instrument = useInstrument();
  if (!instrument) {
    return null;
  }

  const toneSoundPlayer = new ToneSoundPlayer();
  const playInstrument = new PlayInstrument(toneSoundPlayer);

  return (
    <div className='grid grid-cols-1'>
      {
        instrument
          ? notesAvailable.map((note) =>
              BuildKeyButton(note, octave, playInstrument)
            )
          : null // TODO: Loading
      }
    </div>
  );
};

function BuildKeyButton(
  note: string,
  octave: number,
  playInstrument: PlayInstrument
) {
  const keyNote = `${note}${octave}`;
  const type = note.includes('#') ? 'black' : 'white';
  return (
    <KeyButton
      key={keyNote}
      text={keyNote}
      onMouseDown={() => playInstrument.execute(keyNote)}
      // onMouseUp={() => instrument.stopSound(keyNote)}
      // onMouseLeave={() => instrument.stopSound(keyNote)}
      noteType={type}
    />
  );
}
