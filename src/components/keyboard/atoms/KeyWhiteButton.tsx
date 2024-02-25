interface KeyButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const KeyWhiteButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  ...props
}: KeyButtonProps) => {
  return (
    <button
      type='button'
      className='rounded bg-blue-500 text-white hover:bg-blue-700'
      {...props}
    >
      NotebuttonComponent
    </button>
  );
};
