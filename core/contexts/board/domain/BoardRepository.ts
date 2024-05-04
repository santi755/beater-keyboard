import Board from '@core/contexts/board/domain/Board';

export default interface BoardRepository {
  save(board: Board): void;
  get(): Board;
}
