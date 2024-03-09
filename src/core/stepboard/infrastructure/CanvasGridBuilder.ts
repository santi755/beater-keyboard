import GridBuilder from '@/core/stepboard/domain/GridBuilder';
import Grid from '@/core/stepboard/domain/Grid';

export default class CanvasGridBuilder implements GridBuilder {
  drawGrid(canvas: HTMLCanvasElement, grid: Grid): void {
    const context = canvas.getContext('2d');
    const ACTIVE_CELL_COLOR = '#1abc9c';
    const INACTIVE_CELL_COLOR = '#ffffff';
    const BORDER_COLOR = '#333';

    if (!context) {
      throw new Error('Canvas context not found');
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    grid.matrix.forEach((row, cellX) => {
      row.forEach((cell, cellY) => {
        if (grid.matrix[cellX][cellY]) {
          context.fillStyle = ACTIVE_CELL_COLOR;
        } else {
          context.fillStyle = INACTIVE_CELL_COLOR;
        }
        context.fillRect(
          cellY * grid.cellWidth,
          cellX * grid.cellHeight,
          grid.cellWidth,
          grid.cellHeight
        );
        context.strokeStyle = BORDER_COLOR;
        context.strokeRect(
          cellY * grid.cellWidth,
          cellX * grid.cellHeight,
          grid.cellWidth,
          grid.cellHeight
        );
      });
    });
  }
}
