import Board from '@/core/contexts/board/domain/Board';
import GridBuilder from '@/core/contexts/board/domain/GridBuilder';
import BoardDimension from '../domain/BoardDimension';

const CELL_WIDTH = 40;
const CELL_HEIGHT = 32;

export default class StepboardService {
  constructor(private gridBuilder: GridBuilder) {}

  public initializeBoard(): Board {
    return Board.create([], false, 0, new BoardDimension(16, 8));
  }

  public buildGrid(board: Board): void {
    console.log('Drawing grid');
    if (!board) {
      // TODO: Use a custom error
      throw new Error('Canvas not found');
    }

    this.gridBuilder.build(board);
  }
}
