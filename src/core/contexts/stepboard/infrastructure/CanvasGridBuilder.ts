import GridBuilder from '@/core/contexts/stepboard/domain/GridBuilder';
import StepboardGrid from '@/core/contexts/stepboard/domain/StepboardGrid';

export default class CanvasGridBuilder implements GridBuilder {
  drawGrid(canvas: HTMLCanvasElement, grid: StepboardGrid): void {
    const context = canvas.getContext('2d');
    const ACTIVE_CELL_COLOR = '#1abc9c';
    const INACTIVE_CELL_COLOR = '#ffffff';
    const BORDER_COLOR = '#333';

    if (!context) {
      // TODO: Use a custom error
      throw new Error('Canvas context not found');
    }

    if (!grid) {
      // TODO: Use a custom error
      throw new Error('Grid not found');
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    const gridMatrix = Array.from(grid.matrix.values());
    // TODO: refactor to use design pattern and avoid nested loops and if statements
    gridMatrix.forEach((row, cellX) => {
      row.forEach((cell, cellY) => {
        if (cell.duration) {
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
