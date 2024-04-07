import { useEffect, useRef, useState } from 'react';

import { useBoardStore } from '@src/store';

import DrawGrid from '@core/contexts/board/application/DrawGrid';
import CanvasGridDrawer from '@core/contexts/board/infrastructure/CanvasGridDrawer';

type InitializeGrid = {
  steps: number;
  notes: Array<string>;
};

export function useStepboardCanvas({ steps, notes }: InitializeGrid) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const board = useBoardStore((state) => state.board);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      // TODO: Use a custom error
      throw new Error('Canvas not found');
    }

    if (!board) return;

    const drawGrid = new DrawGrid(new CanvasGridDrawer(canvas));

    drawGrid.execute(board);

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
  }, [board]);

  return {
    canvasRef,
  };
}
