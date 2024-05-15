import { injectable } from 'inversify';

import Board from '@core/contexts/board/domain/Board';
import BoardRepository from '@core/contexts/board/domain/BoardRepository';
import BoardInitializator from '@core/contexts/board/infrastructure/configurations/BoardInitializator';
import BoardNotFoundException from '@core/contexts/board/domain/BoardNotFoundException';

@injectable()
export default class InMemoryBoardRepository implements BoardRepository {
  private board: Board | null = null;

  public save(canvas: HTMLCanvasElement): void {
    this.board = BoardInitializator.initialize(canvas);
  }

  public get(): Board {
    if (!this.board) {
      throw new BoardNotFoundException();
    }

    return this.board;
  }
}
