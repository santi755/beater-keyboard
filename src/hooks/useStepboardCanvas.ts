import { useEffect, useRef, useState } from 'react';

import { useBoardStore } from '@/store';

import BoardService from '@/core/contexts/board/application/BoardService';
import CanvasGridBuilder from '@/core/contexts/board/infrastructure/CanvasGridBuilder';

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

    const boardService = new BoardService(new CanvasGridBuilder(canvas));

    boardService.buildGrid(board);

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
