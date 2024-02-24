interface NoteButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export const NoteButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  ...props
}: NoteButtonProps) => {
  return (
    <button
      type="button"
      className="text-white bg-blue-500 hover:bg-blue-700 rounded"
      {...props}
    >
      NotebuttonComponent
    </button>
  );
};
