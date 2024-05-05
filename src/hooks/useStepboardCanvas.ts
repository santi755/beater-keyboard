import { useEffect, useRef } from 'react';
import { TYPES } from '@core/config/types';
import { useInjection } from '@src/config/ioc.react';

import DrawGrid from '@core/contexts/board/application/DrawGrid';
import InitializeBoard from '@core/contexts/board/application/InitializeBoard';

export function useStepboardCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const initializeBoard = useInjection<InitializeBoard>(TYPES.InitializeBoard);
  const drawGrid = useInjection<DrawGrid>(TYPES.DrawGrid);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      throw new Error('Canvas not found');
    }

    initializeBoard.execute(canvas);
    drawGrid.execute();
  }, []);

  return {
    canvasRef,
  };
}
