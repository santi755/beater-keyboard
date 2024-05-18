import { inject, injectable } from 'inversify';
import BoardInteraction from '@core/contexts/board/domain/BoardInteraction';
import GridPositionMapper from '@core/contexts/board/infrastructure/GridPositionMapper';
import { TYPES } from '@core/config/types';
import type BoardRepository from '@core/contexts/board/domain/BoardRepository';
import ClickEvent from '@core/contexts/shared/domain/events/ClickEvent';
import EventNotifier from '@core/contexts/shared/domain/events/EventNotifier';

@injectable()
class ClickBoardInteraction implements BoardInteraction {
  constructor(
    @inject(TYPES.BoardRepository)
    private boardRepository: BoardRepository,
    @inject(TYPES.EventNotifier)
    private eventNotifier: EventNotifier<ClickEvent>
  ) {}

  public handleClick(): void {
    const board = this.boardRepository.get();
    const canvas = board.getCanvas();

    canvas.addEventListener('click', (event) => {
      const { offsetX, offsetY } = event;

      const { x, y } = GridPositionMapper.mapToGridPosition(
        board.getDimension().cellXWidth,
        board.getDimension().cellYHeight,
        offsetX,
        offsetY
      );

      this.eventNotifier.notify('CLICK_EVENT', { x, y });
    });
  }
}

export default ClickBoardInteraction;
