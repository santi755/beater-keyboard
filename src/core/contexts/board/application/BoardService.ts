import Board from '@/core/contexts/board/domain/Board';
import GridBuilder from '@/core/contexts/board/domain/GridBuilder';
import StepboardGrid from '@/core/contexts/board/domain/StepboardGrid';

const CELL_WIDTH = 40;
const CELL_HEIGHT = 32;

export default class StepboardService {
  constructor(private gridBuilder: GridBuilder) {}

  public initializeBoard(): Board {
    return Board.create([]);
  }

  public initializeGrid(steps: number, notes: Array<string>): any {
    return StepboardGrid.create(steps, notes, CELL_WIDTH, CELL_HEIGHT);
  }

  public drawGrid(
    canvas: HTMLCanvasElement,
    stepboardGrid: StepboardGrid
  ): void {
    if (!canvas) {
      // TODO: Use a custom error
      throw new Error('Canvas not found');
    }

    this.gridBuilder.drawGrid(canvas, stepboardGrid);
  }
}
