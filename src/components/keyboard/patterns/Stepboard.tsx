import { useStepboardCanvas } from '@src/hooks/useStepboardCanvas';

export const Stepboard = () => {
  const { canvasRef } = useStepboardCanvas();

  return (
    <>
      <canvas ref={canvasRef} width={800} height={384}></canvas>
    </>
  );
};
