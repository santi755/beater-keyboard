import Board from '@/core/contexts/board/domain/Board';
import GridDrawer from '@/core/contexts/board/domain/GridDrawer';

export default class DrawGrid {
  constructor(private gridDrawer: GridDrawer) {}

  public execute(board: Board): void {
    console.log('Drawing grid');
    if (!board) {
      // TODO: Use a custom error
      throw new Error('Canvas not found');
    }

    this.gridDrawer.draw(board);
  }
}
