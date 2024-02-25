import { KeyButton } from '@/components/keyboard/atoms/KeyButton';

interface KeyButtonProps {
  octave: number;
  onMouseDown: (note: string) => void;
  onMouseUp: (note: string) => void;
  onMouseLeave: (note: string) => void;
}

export const KeyboardOctave = ({ ...props }: KeyButtonProps) => {
  const notes = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
  ];

  return (
    <div className='d-flex'>
      {notes.map((note) => (
        <KeyButton
          key={`${note}${props.octave}`}
          text={`${note}${props.octave}`}
          onMouseDown={() => props.onMouseDown(`${note}${props.octave}`)}
          onMouseUp={() => props.onMouseUp(`${note}${props.octave}`)}
          onMouseLeave={() => props.onMouseLeave(`${note}${props.octave}`)}
          noteType={note.includes('#') ? 'black' : 'white'}
        />
      ))}
    </div>
  );
};
