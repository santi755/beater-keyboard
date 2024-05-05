import Board from '@core/contexts/board/domain/Board';

export default interface BoardRepository {
  get(): Board;
}
