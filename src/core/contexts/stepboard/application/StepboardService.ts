import GridBuilder from '@/core/contexts/stepboard/domain/GridBuilder';
import Grid from '@/core/contexts/stepboard/domain/Grid';

const CELL_WIDTH = 50;
const CELL_HEIGHT = 50;

export default class StepboardService {
  constructor(
    private gridBuilder: GridBuilder,
    private canvas: HTMLCanvasElement,
    private grid: Grid = new Grid([], CELL_WIDTH, CELL_HEIGHT)
  ) {}

  public initializeCanvas(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
  }

  public initializeGrid(colsQuantity: number, rowsQuantity: number): any {
    this.grid.initializeMatrix(colsQuantity, rowsQuantity);

    return this.grid;
  }

  public drawGrid(): void {
    if (!this.canvas) {
      throw new Error('Canvas not found');
    }

    this.gridBuilder.drawGrid(this.canvas, this.grid);
  }
}
