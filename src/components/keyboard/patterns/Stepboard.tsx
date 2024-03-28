import { useStepboardCanvas } from '@/hooks/useStepboardCanvas';
import { keyboardNotes } from '@/config/noteList';

export const Stepboard = () => {
  const notes = keyboardNotes.map((note) => note.value);
  const { canvasRef, grid } = useStepboardCanvas({
    steps: 12,
    notes,
  });

  return (
    <>
      <canvas ref={canvasRef} width={800} height={384}></canvas>
    </>
  );
};
