import { keyboardNotesQuantity } from '@/config/noteList';
import { useStepboardCanvas } from '@/app/hooks/useStepboardCanvas';

export const Stepboard = () => {
  const { canvasRef, grid } = useStepboardCanvas();

  return (
    <>
      <canvas ref={canvasRef} width={800} height={384}></canvas>

      <p>grid: {grid}</p>
      <p>keyboardNotesQuantity: {keyboardNotesQuantity}</p>
    </>
  );
};
