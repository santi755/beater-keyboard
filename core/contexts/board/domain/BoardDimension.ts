export default class BoardDimension {
  constructor(
    readonly width: number,
    readonly height: number,
    readonly cellXWidth: number,
    readonly cellYHeight: number
  ) {}

  static create(
    width: number,
    height: number,
    cellXWidth: number,
    cellYHeight: number
  ): BoardDimension {
    return new BoardDimension(width, height, cellXWidth, cellYHeight);
  }

  getCellWidth(): number {
    return this.width / this.cellXWidth;
  }

  getCellHeight(): number {
    return this.height / this.cellYHeight;
  }
}
