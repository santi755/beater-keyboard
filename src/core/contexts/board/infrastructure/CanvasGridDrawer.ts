import GridDrawer from '@/core/contexts/board/domain/GridDrawer';
import Board from '@/core/contexts/board/domain/Board';

const CELL_WIDTH = 40;
const CELL_HEIGHT = 32;
const BORDER_COLOR = '#333';

export default class CanvasGridDrawer implements GridDrawer {
  public constructor(
    private readonly canvas: HTMLCanvasElement = document.createElement(
      'canvas'
    )
  ) {}

  draw(board: Board): void {
    const context = this.canvas.getContext('2d');
    const canvasWidth = board.getDimensions().width;
    const canvasHeight = board.getDimensions().height;

    if (!context) {
      // TODO: Use a custom error
      throw new Error('Canvas context not found');
    }

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.strokeStyle = BORDER_COLOR;

    for (let x = 0; x <= canvasWidth; x += CELL_WIDTH) {
      context.moveTo(x, 0);
      context.lineTo(x, canvasHeight);
    }

    for (let y = 0; y <= canvasHeight; y += CELL_HEIGHT) {
      context.moveTo(0, y);
      context.lineTo(canvasWidth, y);
    }

    context.stroke();
  }
}
