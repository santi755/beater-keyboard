import BoardDimension from '@core/contexts/board/domain/BoardDimension';

export default class Board {
  constructor(
    private canvas: HTMLCanvasElement,
    private dimension: BoardDimension
  ) {}

  static create(canvas: HTMLCanvasElement, dimension: BoardDimension): Board {
    return new Board(canvas, dimension);
  }

  getCanvas(): HTMLCanvasElement {
    return this.canvas;
  }

  getDimension(): BoardDimension {
    return this.dimension;
  }
}
