import { injectable } from 'inversify';

import Board from '@core/contexts/board/domain/Board';
import BoardDimension from '@core/contexts/board/domain/BoardDimension';
import BoardRepository from '@core/contexts/board/domain/BoardRepository';

// TODO: This should be dynamic configuration depending on the octaves and steps
const BOARD_WIDTH = 800;
const BOARD_HEIGHT = 384;
const CELL_WIDTH = 42;
const CELL_HEIGHT = BOARD_HEIGHT / 12;

@injectable()
export default class InMemoryBoardRepository implements BoardRepository {
  private board: Board;

  constructor() {
    const dimensions = BoardDimension.create(
      BOARD_WIDTH,
      BOARD_HEIGHT,
      CELL_WIDTH,
      CELL_HEIGHT
    );
    this.board = Board.create(false, 0, dimensions);
  }

  public save(board: Board): void {
    this.board = board;
  }

  public get(): Board {
    return this.board;
  }
}
