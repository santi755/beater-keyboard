interface KeyButtonProps {
  onMouseDown: () => void;
  //onMouseUp: () => void;
  //onMouseLeave: () => void;
  text?: string;
  noteType: 'white' | 'black';
}

export const KeyButton = ({ noteType, text, ...props }: KeyButtonProps) => {
  const buttonClass =
    noteType === 'white'
      ? 'bg-white py-1 text-black h-8'
      : 'bg-black py-0 text-white h-8';

  return (
    <button
      type='button'
      className={`text-align-right w-32 rounded-r border border-black px-2 text-right text-xs ${buttonClass}`}
      {...props}
    >
      {text}
    </button>
  );
};
