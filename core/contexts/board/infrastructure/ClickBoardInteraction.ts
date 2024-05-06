import { inject, injectable } from 'inversify';
import BoardInteraction from '@core/contexts/board/domain/BoardInteraction';
import Board from '../domain/Board';
import GridPositionMapper from '@core/contexts/board/infrastructure/GridPositionMapper';
import { TYPES } from '@core/config/types';
import type BoardRepository from '@core/contexts/board/domain/BoardRepository';

@injectable()
class ClickBoardInteraction implements BoardInteraction {
  constructor(
    @inject(TYPES.BoardRepository)
    private boardRepository: BoardRepository
  ) {}

  public handleClick(): void {
    const board = this.boardRepository.get();
    const canvas = board.getCanvas();

    canvas.addEventListener('click', (event) => {
      console.log('event = ', event);
      const { offsetX, offsetY } = event;

      const { x, y } = GridPositionMapper.mapToGridPosition(
        board.getDimension().cellXWidth,
        board.getDimension().cellYHeight,
        offsetX,
        offsetY
      );

      console.log(`Clicked on cell: ${x}, ${y}`);
    });
  }
}

export default ClickBoardInteraction;
