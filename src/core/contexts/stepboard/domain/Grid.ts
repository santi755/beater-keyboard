export type Matrix = boolean[][];

export default class Grid {
  constructor(
    public matrix: Matrix,
    public cellWidth: number,
    public cellHeight: number
  ) {}

  static create(
    colsQuantity: number,
    rowsQuantity: number,
    cellWidth: number,
    cellHeight: number
  ): Grid {
    const row = new Array(colsQuantity).fill(false);
    const column = new Array(rowsQuantity).fill(row);
    const matrix = column.map(() => [...row]);

    return new Grid(matrix, cellWidth, cellHeight);
  }

  toPrimitives(): object {
    return {
      matrix: this.matrix,
      cellWidth: this.cellWidth,
      cellHeight: this.cellHeight,
    };
  }
}
