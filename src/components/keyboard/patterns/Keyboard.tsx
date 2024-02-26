import { KeyboardOctave } from '@/components/keyboard/patterns/KeyboardOctave';

export const Keyboard = () => {
  const keyboardOctaves = [8, 7, 6, 5, 4];
  return keyboardOctaves.map((octave) => (
    <KeyboardOctave key={octave} octave={octave} />
  ));
};
