export default class BoardDimension {
  constructor(
    readonly width: number,
    readonly height: number
  ) {}

  static create(width: number, height: number): BoardDimension {
    return new BoardDimension(width, height);
  }
}
