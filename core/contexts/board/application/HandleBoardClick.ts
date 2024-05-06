import { injectable, inject } from 'inversify';
import { TYPES } from '@core/config/types';

import type BoardInteraction from '@core/contexts/board/domain/BoardInteraction';

@injectable()
export default class HandleBoardClick {
  constructor(
    @inject(TYPES.BoardInteraction)
    private boardInteraction: BoardInteraction
  ) {}

  public execute(): void {
    this.boardInteraction.handleClick();
  }
}
