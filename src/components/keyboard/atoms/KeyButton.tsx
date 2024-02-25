interface KeyButtonProps {
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  text?: string;
  noteType: 'white' | 'black';
}

export const KeyButton = ({ noteType, text, ...props }: KeyButtonProps) => {
  const buttonClass =
    noteType === 'white'
      ? 'w-32 bg-white py-1 text-black h-8'
      : 'w-20 bg-black py-0 text-white h-6 -mt-3 -mb-3 z-10';

  return (
    <button
      type='button'
      className={`text-align-right rounded border border-black px-2 text-right text-xs ${buttonClass}`}
      {...props}
    >
      {text}
    </button>
  );
};
