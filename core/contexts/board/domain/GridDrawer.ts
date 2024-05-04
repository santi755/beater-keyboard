import Board from './Board';

export default interface GridDrawer {
  draw(board: Board, canvas: HTMLCanvasElement): void;
}
