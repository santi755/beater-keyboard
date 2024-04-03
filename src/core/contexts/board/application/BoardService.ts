import Board from '@/core/contexts/board/domain/Board';
import GridDrawer from '@/core/contexts/board/domain/GridDrawer';
import BoardDimension from '../domain/BoardDimension';

export default class StepboardService {
  constructor(private gridDrawer: GridDrawer) {}

  public initializeBoard(): Board {
    return Board.create([], false, 0, new BoardDimension(800, 384));
  }

  public drawGrid(board: Board): void {
    console.log('Drawing grid');
    if (!board) {
      // TODO: Use a custom error
      throw new Error('Canvas not found');
    }

    this.gridDrawer.draw(board);
  }
}
