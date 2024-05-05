import { injectable, inject } from 'inversify';
import { TYPES } from '@core/config/types';

import type BoardRepository from '@core/contexts/board/domain/BoardRepository';
import type BoardInteraction from '@core/contexts/board/domain/BoardInteraction';

@injectable()
export default class HandleBoardClick {
  constructor(
    @inject(TYPES.BoardRepository)
    private boardRepository: BoardRepository,
    @inject(TYPES.BoardInteraction)
    private boardInteraction: BoardInteraction
  ) {}

  public execute(): void {
    const board = this.boardRepository.get();

    if (!board) {
      throw new Error('Board not found');
    }

    this.boardInteraction.handleClick(board);
  }
}
