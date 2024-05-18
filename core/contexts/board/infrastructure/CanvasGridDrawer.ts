import { injectable } from 'inversify';
import GridDrawer from '@core/contexts/board/domain/GridDrawer';
import Board from '@core/contexts/board/domain/Board';
import CanvasContextNotFoundException from '@core/contexts/board/domain/CanvasContextNotFoundException';
import Observer from '@core/contexts/shared/domain/events/Observer';
import ClickEvent from '@core/contexts/shared/domain/events/ClickEvent';

const BORDER_COLOR = '#333';

@injectable()
class CanvasGridDrawer implements GridDrawer, Observer<ClickEvent> {
  draw(board: Board): void {
    const canvas = board.getCanvas();
    const context = canvas.getContext('2d');
    const canvasWidth = board.getDimension().width;
    const canvasHeight = board.getDimension().height;
    const cellWidth = board.getDimension().cellXWidth;
    const cellHeight = board.getDimension().cellYHeight;

    if (!context) {
      throw new CanvasContextNotFoundException();
    }

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.strokeStyle = BORDER_COLOR;

    // TODO: Check if it's necessary to refactor this
    for (let x = 0; x <= canvasWidth; x += cellWidth) {
      context.moveTo(x, 0);
      context.lineTo(x, canvasHeight);
    }

    for (let y = 0; y <= canvasHeight; y += cellHeight) {
      context.moveTo(0, y);
      context.lineTo(canvasWidth, y);
    }

    context.stroke();
  }

  public update(data: ClickEvent): void {
    console.log('ClickBoardInteraction notified with data: ', data);
  }
}

export default CanvasGridDrawer;
