import Board from './Board';

export default interface GridBuilder {
  build(board: Board): void;
}
