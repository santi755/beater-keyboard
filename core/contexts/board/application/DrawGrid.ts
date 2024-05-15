import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';
import type GridDrawer from '@core/contexts/board/domain/GridDrawer';
import type BoardRepository from '@core/contexts/board/domain/BoardRepository';

@injectable()
export default class DrawGrid {
  constructor(
    @inject(TYPES.GridDrawer)
    private gridDrawer: GridDrawer,
    @inject(TYPES.BoardRepository)
    private boardRepository: BoardRepository
  ) {}

  public execute(): void {
    const board = this.boardRepository.get();
    this.gridDrawer.draw(board);
  }
}
