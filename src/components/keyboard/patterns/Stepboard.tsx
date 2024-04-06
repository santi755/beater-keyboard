import { useStepboardCanvas } from '@src/hooks/useStepboardCanvas';
import { useBoardStore } from '@src/store';

export const Stepboard = () => {
  const board = useBoardStore((state) => state.board);

  const notes = board?.getNotesAvailable() || [];
  const { canvasRef } = useStepboardCanvas({
    steps: 12,
    notes,
  });

  return (
    <>
      <canvas ref={canvasRef} width={800} height={384}></canvas>
    </>
  );
};
