import BoardDimension from '@core/contexts/board/domain/BoardDimension';

export default class Board {
  constructor(
    private instance: HTMLCanvasElement,
    private dimension: BoardDimension
  ) {}

  static create(canvas: HTMLCanvasElement, dimension: BoardDimension): Board {
    return new Board(canvas, dimension);
  }
}
