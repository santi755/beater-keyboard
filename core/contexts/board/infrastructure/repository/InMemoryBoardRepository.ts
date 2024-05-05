import { injectable } from 'inversify';

import Board from '@core/contexts/board/domain/Board';
import BoardDimension from '@core/contexts/board/domain/BoardDimension';
import BoardRepository from '@core/contexts/board/domain/BoardRepository';
import BoardInitializator from '@core/contexts/board/infrastructure/configurations/BoardInitializator';

@injectable()
export default class InMemoryBoardRepository implements BoardRepository {
  private board: Board | null = null;

  public save(canvas: HTMLCanvasElement): void {
    this.board = BoardInitializator.initialize(canvas);
  }

  public get(): Board {
    if (!this.board) {
      throw new Error('Board not found');
    }

    return this.board;
  }
}
