import GridBuilder from '@/core/stepboard/domain/GridBuilder';
import Grid from '@/core/stepboard/domain/Grid';

const CELL_WIDTH = 50;
const CELL_HEIGHT = 50;

export default class StepboardService {
  constructor(
    private gridBuilder: GridBuilder,
    private canvas: HTMLCanvasElement
  ) {}

  initialize(colsQuantity: number, rowsQuantity: number): any {
    const grid: Grid = {
      matrix: this.createGridMatrix(colsQuantity, rowsQuantity),
      cellWidth: CELL_WIDTH,
      cellHeight: CELL_HEIGHT,
    };

    return grid;
  }

  createGridMatrix(colsQuantity: number, rowsQuantity: number): boolean[][] {
    const row = new Array(colsQuantity).fill(false);
    const column = new Array(rowsQuantity).fill(row);

    return column.map(() => [...row]);
  }
}
