import { useEffect, useRef, useState } from 'react';

import Grid from '@/core/contexts/stepboard/domain/Grid';

import StepboardService from '@/core/contexts/stepboard/application/StepboardService';
import CanvasGridBuilder from '@/core/contexts/stepboard/infrastructure/CanvasGridBuilder';

type InitializeGrid = {
  rowsQuantity: number;
  colsQuantity: number;
};

type DrawGrid = {
  canvas: HTMLCanvasElement;
  grid: boolean[][];
  cellWidth: number;
  cellHeight: number;
};

export function useStepboardCanvas({
  rowsQuantity,
  colsQuantity,
}: InitializeGrid) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stepboardService = new StepboardService(
    new CanvasGridBuilder(),
    canvasRef.current as HTMLCanvasElement
  );

  const [grid, setGrid] = useState<Grid>(
    stepboardService.initializeGrid(colsQuantity, rowsQuantity)
  );

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    stepboardService.initializeCanvas(canvas);
    stepboardService.drawGrid(grid);

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
    grid,
  };
}

/*
function drawGrid({ canvas, grid, cellWidth, cellHeight }: DrawGrid) {
  const context = canvas.getContext('2d');
  const ACTIVE_CELL_COLOR = '#1abc9c';
  const INACTIVE_CELL_COLOR = '#ffffff';
  const BORDER_COLOR = '#333';

  if (!context) return;

  context.clearRect(0, 0, canvas.width, canvas.height);

  grid.forEach((row, cellX) => {
    row.forEach((cell, cellY) => {
      if (grid[cellX][cellY]) {
        context.fillStyle = ACTIVE_CELL_COLOR;
      } else {
        context.fillStyle = INACTIVE_CELL_COLOR;
      }
      context.fillRect(
        cellY * cellWidth,
        cellX * cellHeight,
        cellWidth,
        cellHeight
      );
      context.strokeStyle = BORDER_COLOR;
      context.strokeRect(
        cellY * cellWidth,
        cellX * cellHeight,
        cellWidth,
        cellHeight
      );
    });
  });
}

function getCellPosition(
  event: MouseEvent,
  canvas: HTMLCanvasElement,
  cellWidth: number,
  cellHeight: number
) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const cellX = Math.floor(y / cellHeight);
  const cellY = Math.floor(x / cellWidth);

  return { cellX, cellY };
}
*/
