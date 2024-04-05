import Board from '@/core/contexts/board/domain/Board';
import BoardDimension from '../domain/BoardDimension';

export default class InitializeBoard {
  constructor() {}

  public execute(): Board {
    return Board.create([], false, 0, new BoardDimension(800, 384));
  }
}
