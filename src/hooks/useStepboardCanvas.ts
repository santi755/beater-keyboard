import { useEffect, useRef, useState } from 'react';
import { TYPES } from '@core/config/types';
import { useInjection } from '@src/config/ioc.react';

import DrawGrid from '@core/contexts/board/application/DrawGrid';

export function useStepboardCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawGrid = useInjection<DrawGrid>(TYPES.DrawGrid);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      throw new Error('Canvas not found');
    }

    drawGrid.execute(canvas);

    /******
    // Create cell interaction on click
    canvas.addEventListener('click', (event) => {
      const cellWidth = canvas.width / colsQuantity;
      const cellHeight = canvas.height / rowsQuantity;
      const { cellX, cellY } = getCellPosition(
        event,
        canvas,
        cellWidth,
        cellHeight
      );

      const newGrid: boolean[][] = [...grid.matrix];
      newGrid[cellX][cellY] = !newGrid[cellX][cellY];
      setGrid({
        ...grid,
        matrix: newGrid,
      });

      drawGrid({
        canvas,
        grid: newGrid,
        cellWidth,
        cellHeight,
      });
    });

    *********/
  }, []);

  return {
    canvasRef,
  };
}
