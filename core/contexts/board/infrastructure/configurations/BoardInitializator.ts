import Board from '@core/contexts/board/domain/Board';
import BoardDimension from '@core/contexts/board/domain/BoardDimension';

import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
} from '@core/contexts/board/infrastructure/configurations/BoardConfigurations';

export default class BoardInitializator {
  static initialize(canvas: HTMLCanvasElement): Board {
    canvas.width = BOARD_WIDTH;
    canvas.height = BOARD_HEIGHT;

    return Board.create(canvas, new BoardDimension(BOARD_WIDTH, BOARD_HEIGHT));
  }
}
