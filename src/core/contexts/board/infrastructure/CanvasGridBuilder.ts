import GridBuilder from '@/core/contexts/board/domain/GridBuilder';
import Board from '@/core/contexts/board/domain/Board';

const CELL_WIDTH = 40;
const CELL_HEIGHT = 32;

export default class CanvasGridBuilder implements GridBuilder {
  public constructor(
    private readonly canvas: HTMLCanvasElement = document.createElement(
      'canvas'
    )
  ) {}

  build(board: Board): void {
    const context = this.canvas.getContext('2d');
    const BORDER_COLOR = '#333';

    if (!context) {
      // TODO: Use a custom error
      throw new Error('Canvas context not found');
    }

    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    context.strokeStyle = BORDER_COLOR;

    for (let x = 0; x <= this.canvas.width; x += CELL_WIDTH) {
      context.moveTo(x, 0);
      context.lineTo(x, this.canvas.height);
    }

    for (let y = 0; y <= this.canvas.height; y += CELL_HEIGHT) {
      context.moveTo(0, y);
      context.lineTo(this.canvas.width, y);
    }

    context.stroke();
  }
}
