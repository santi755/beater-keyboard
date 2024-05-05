import Board from '@core/contexts/board/domain/Board';

export default interface BoardRepository {
  save(canvas: HTMLCanvasElement): void;
  get(): Board;
}
