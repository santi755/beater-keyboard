import { useEffect, useRef, useState } from 'react';

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
  const [grid, setGrid] = useState<boolean[][]>(initializeGrid());

  function initializeGrid() {
    const row = new Array(colsQuantity).fill(false);
    const column = new Array(rowsQuantity).fill(row);

    return column.map(() => [...row]);
  }

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const cellWidth = canvas.width / colsQuantity;
    const cellHeight = canvas.height / rowsQuantity;

    drawGrid({
      canvas,
      grid,
      cellWidth,
      cellHeight,
    });

    // Create cell interaction on click
    canvas.addEventListener('click', (event) => {
      const { cellX, cellY } = getCellPosition(
        event,
        canvas,
        cellWidth,
        cellHeight
      );

      const newGrid = [...grid];
      newGrid[cellX][cellY] = !newGrid[cellX][cellY];
      setGrid(newGrid);

      drawGrid({
        canvas,
        grid: newGrid,
        cellWidth,
        cellHeight,
      });
    });
  }, []);

  function drawGrid({ canvas, grid, cellWidth, cellHeight }: DrawGrid) {
    const context = canvas.getContext('2d');

    if (!context) return;

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
        context.strokeRect(
          j * cellWidth,
          i * cellHeight,
          cellWidth,
          cellHeight
        );
      }
    }
  }

  return {
    canvasRef,
    grid,
  };
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
