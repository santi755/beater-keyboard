import GridBuilder from '@/core/contexts/board/domain/GridBuilder';
import Board from '@/core/contexts/board/domain/Board';

export default class CanvasGridBuilder implements GridBuilder {
  public constructor(
    private readonly canvas: HTMLCanvasElement = document.createElement(
      'canvas'
    )
  ) {}

  build(board: Board): void {
    const context = this.canvas.getContext('2d');
    const ACTIVE_CELL_COLOR = '#1abc9c';
    const INACTIVE_CELL_COLOR = '#ffffff';
    const BORDER_COLOR = '#333';

    if (!context) {
      // TODO: Use a custom error
      throw new Error('Canvas context not found');
    }

    console.log('board => ', board);
    /*
    if (!grid) {
      // TODO: Use a custom error
      throw new Error('Grid not found');
    }

    context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const gridMatrix = Array.from(grid.matrix.values());

    // TODO: refactor to use design pattern and avoid nested loops and if statements
    gridMatrix.forEach((steps, stepPositionX) => {
      steps.forEach((step, stepPositionY) => {
        if (step.duration) {
          context.fillStyle = ACTIVE_CELL_COLOR;
        } else {
          context.fillStyle = INACTIVE_CELL_COLOR;
        }

        context.fillRect(
          stepPositionY * grid.cellWidth,
          stepPositionX * grid.cellHeight,
          grid.cellWidth,
          grid.cellHeight
        );

        context.strokeStyle = BORDER_COLOR;
        context.strokeRect(
          stepPositionY * grid.cellWidth,
          stepPositionX * grid.cellHeight,
          grid.cellWidth,
          grid.cellHeight
        );
      });
    });
    */
  }
}
