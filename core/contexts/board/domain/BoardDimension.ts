export default class BoardDimension {
  constructor(
    readonly width: number,
    readonly height: number,
    readonly cellXQuantity: number,
    readonly cellYQuantity: number
  ) {}

  static create(
    width: number,
    height: number,
    cellXQuantity: number,
    cellYQuantity: number
  ): BoardDimension {
    return new BoardDimension(width, height, cellXQuantity, cellYQuantity);
  }
}
