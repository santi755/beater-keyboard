export type Matrix = boolean[][];

export default interface Grid {
  matrix: Matrix;
  cellWidth: number;
  cellHeight: number;
}
