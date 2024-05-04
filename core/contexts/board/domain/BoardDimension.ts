export default class BoardDimension {
  constructor(
    readonly width: number,
    readonly height: number,
    readonly cellWidth: number,
    readonly cellHeight: number
  ) {}

  static create(
    width: number,
    height: number,
    cellWidth: number,
    cellHeight: number
  ): BoardDimension {
    return new BoardDimension(width, height, cellWidth, cellHeight);
  }
}
