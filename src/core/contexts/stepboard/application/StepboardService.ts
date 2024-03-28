import GridBuilder from '@/core/contexts/stepboard/domain/GridBuilder';
import StepboardGrid from '@/core/contexts/stepboard/domain/StepboardGrid';

const CELL_WIDTH = 32;
const CELL_HEIGHT = 32;

export default class StepboardService {
  constructor(
    private gridBuilder: GridBuilder,
    private canvas: HTMLCanvasElement
  ) {}

  public initializeCanvas(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;
  }

  public initializeGrid(steps: number, notes: Array<string>): any {
    return StepboardGrid.create(steps, notes, CELL_WIDTH, CELL_HEIGHT);
  }

  public drawGrid(stepboardGrid: StepboardGrid): void {
    if (!this.canvas) {
      // TODO: Use a custom error
      throw new Error('Canvas not found');
    }

    this.gridBuilder.drawGrid(this.canvas, stepboardGrid);
  }
}
