import { useEffect, useRef } from 'react';

type InitializeGrid = {
  rowsQuantity: number;
  colsQuantity: number;
};

type DrawGrid = {
  context: CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;
  grid: boolean[][];
  rowsQuantity: number;
  colsQuantity: number;
  cellWidth: number;
  cellHeight: number;
};

export function useStepboardCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const rowsQuantity = 12;
  const colsQuantity = 16;
  const grid = initializeGrid({ rowsQuantity, colsQuantity });

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) return;

    const cellWidth = canvas.width / colsQuantity;
    const cellHeight = canvas.height / rowsQuantity;
    const grid: boolean[][] = initializeGrid({ rowsQuantity, colsQuantity });

    drawGrid({
      context,
      canvas,
      grid,
      rowsQuantity,
      colsQuantity,
      cellWidth,
      cellHeight,
    });

    // Create cell interaction on click
    canvas.addEventListener('click', (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const i = Math.floor(y / cellHeight);
      const j = Math.floor(x / cellWidth);

      grid[i][j] = !grid[i][j];

      drawGrid({
        context,
        canvas,
        grid,
        rowsQuantity,
        colsQuantity,
        cellWidth,
        cellHeight,
      });
    });
  }, []);

  return {
    canvasRef,
    grid,
  };
}

function initializeGrid({ rowsQuantity, colsQuantity }: InitializeGrid) {
  const grid: boolean[][] = [];
  for (let i = 0; i < rowsQuantity; i++) {
    grid[i] = [];
    for (let j = 0; j < colsQuantity; j++) {
      grid[i][j] = false;
    }
  }
  return grid;
}

function drawGrid({
  context,
  canvas,
  grid,
  rowsQuantity,
  colsQuantity,
  cellWidth,
  cellHeight,
}: DrawGrid) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < rowsQuantity; i++) {
    for (let j = 0; j < colsQuantity; j++) {
      if (grid[i][j]) {
        context.fillStyle = '#1abc9c'; // Color de las celdas activas
      } else {
        context.fillStyle = '#ffffff'; // Color de las celdas inactivas
      }
      context.fillRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
      context.strokeStyle = '#333'; // Color del borde
      context.strokeRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
    }
  }
}
