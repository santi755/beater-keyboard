import { injectable } from 'inversify';

import Board from '@core/contexts/board/domain/Board';
import BoardDimension from '@core/contexts/board/domain/BoardDimension';
import BoardRepository from '@core/contexts/board/domain/BoardRepository';
import BoardInitializator from '@core/contexts/board/infrastructure/configurations/BoardInitializator';

@injectable()
export default class InMemoryBoardRepository implements BoardRepository {
  private board: Board;

  constructor(canvas: HTMLCanvasElement) {
    this.board = BoardInitializator.initialize(canvas);
  }

  public get(): Board {
    return this.board;
  }
}
