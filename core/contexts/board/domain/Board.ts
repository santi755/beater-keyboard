import BoardDimension from '@core/contexts/board/domain/BoardDimension';

export default class Board {
  constructor(
    private playing: boolean,
    private currentStep: number,
    private dimension: BoardDimension
  ) {}

  static create(
    playing: boolean,
    currentStep: number,
    dimensions: BoardDimension
  ): Board {
    return new Board(playing, currentStep, dimensions);
  }

  public getDimensions(): BoardDimension {
    return this.dimension;
  }
}
