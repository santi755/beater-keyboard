import { keyboardNotesQuantity } from '@/config/noteList';
import { useStepboardCanvas } from '@/hooks/useStepboardCanvas';
import { useEffect } from 'react';

export const Stepboard = () => {
  const { canvasRef, grid } = useStepboardCanvas({
    rowsQuantity: 12,
    colsQuantity: 16,
  });

  useEffect(() => {
    console.log('Stepboard grid', grid);
  }, [grid]);

  return (
    <>
      <canvas ref={canvasRef} width={800} height={384}></canvas>

      <p>grid: {JSON.stringify(grid)}</p>
      <p>keyboardNotesQuantity: {keyboardNotesQuantity}</p>
    </>
  );
};
