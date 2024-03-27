import GridBuilder from '@/core/contexts/stepboard/domain/GridBuilder';
import Grid from '@/core/contexts/stepboard/domain/Grid';

const CELL_WIDTH = 50;
const CELL_HEIGHT = 50;

export default class StepboardService {
  constructor(
    private gridBuilder: GridBuilder,
    private canvas: HTMLCanvasElement
  ) {}

  public initializeCanvas(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
  }

  public initializeGrid(colsQuantity: number, rowsQuantity: number): any {
    return Grid.create(colsQuantity, rowsQuantity, CELL_WIDTH, CELL_HEIGHT);
  }

  public drawGrid(grid: Grid): void {
    if (!this.canvas) {
      // TODO: Use a custom error
      throw new Error('Canvas not found');
    }

    this.gridBuilder.drawGrid(this.canvas, grid);
  }
}
