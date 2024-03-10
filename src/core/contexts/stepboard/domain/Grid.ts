export type Matrix = boolean[][];

/*
export default interface Grid {
  matrix: Matrix;
  cellWidth: number;
  cellHeight: number;
}
*/

export default class Grid {
  constructor(
    private matrix: Matrix,
    private cellWidth: number,
    private cellHeight: number
  ) {}

  initializeMatrix(colsQuantity: number, rowsQuantity: number): void {
    const row = new Array(colsQuantity).fill(false);
    const column = new Array(rowsQuantity).fill(row);

    this.matrix = column.map(() => [...row]);
  }
}
