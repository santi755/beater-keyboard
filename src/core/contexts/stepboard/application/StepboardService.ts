import GridBuilder from '@/core/contexts/stepboard/domain/GridBuilder';
import Grid from '@/core/contexts/stepboard/domain/Grid';

const CELL_WIDTH = 50;
const CELL_HEIGHT = 50;

export default class StepboardService {
  constructor(
    private gridBuilder: GridBuilder,
    private canvas: HTMLCanvasElement,
    private grid: Grid = {
      matrix: [],
      cellWidth: CELL_WIDTH,
      cellHeight: CELL_HEIGHT,
    }
  ) {}

  public initializeCanvas(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
  }

  public initializeGrid(colsQuantity: number, rowsQuantity: number): any {
    this.grid.matrix = this.createGridMatrix(colsQuantity, rowsQuantity);

    return this.grid;
  }

  private createGridMatrix(
    colsQuantity: number,
    rowsQuantity: number
  ): boolean[][] {
    const row = new Array(colsQuantity).fill(false);
    const column = new Array(rowsQuantity).fill(row);

    return column.map(() => [...row]);
  }

  public drawGrid(): void {
    if (!this.canvas) {
      throw new Error('Canvas not found');
    }

    this.gridBuilder.drawGrid(this.canvas, this.grid);
  }
}
