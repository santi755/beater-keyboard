import { KeyButton } from '@/components/keyboard/atoms/KeyButton';

interface KeyButtonProps {
  octave: number;
  onMouseDown: (note: string) => void;
  onMouseUp: (note: string) => void;
  onMouseLeave: (note: string) => void;
}

export const KeyboardOctave = ({ ...props }: KeyButtonProps) => {
  // Move this configuration to a separate file
  const noteList: { value: string; type: 'white' | 'black' }[] = [
    {
      value: 'B',
      type: 'white',
    },
    {
      value: 'A#',
      type: 'black',
    },
    {
      value: 'A',
      type: 'white',
    },
    {
      value: 'G#',
      type: 'black',
    },
    {
      value: 'G',
      type: 'white',
    },
    {
      value: 'F#',
      type: 'black',
    },
    {
      value: 'F',
      type: 'white',
    },
    {
      value: 'E',
      type: 'white',
    },
    {
      value: 'D#',
      type: 'black',
    },
    {
      value: 'D',
      type: 'white',
    },
    {
      value: 'C#',
      type: 'black',
    },
    {
      value: 'C',
      type: 'white',
    },
  ];

  return (
    <div className='grid grid-cols-1'>
      {noteList.map((note) => (
        <KeyButton
          key={`${note.value}${props.octave}`}
          text={`${note.value}${props.octave}`}
          onMouseDown={() => props.onMouseDown(`${note.value}${props.octave}`)}
          onMouseUp={() => props.onMouseUp(`${note.value}${props.octave}`)}
          onMouseLeave={() =>
            props.onMouseLeave(`${note.value}${props.octave}`)
          }
          noteType={note.type}
        />
      ))}
    </div>
  );
};
