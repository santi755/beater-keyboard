export default class StepboardService {
  constructor() {}

  initializeGrid(colsQuantity: number, rowsQuantity: number): any {
    const row = new Array(colsQuantity).fill(false);
    const column = new Array(rowsQuantity).fill(row);

    return column.map(() => [...row]);
  }
  drawGrid(
    canvas: HTMLCanvasElement,
    grid: boolean[][],
    cellWidth: number,
    cellHeight: number
  ): any {
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
  getCellPosition(
    event: MouseEvent,
    canvas: HTMLCanvasElement,
    cellWidth: number,
    cellHeight: number
  ): any {
    throw new Error('Method not implemented.');
  }
}
