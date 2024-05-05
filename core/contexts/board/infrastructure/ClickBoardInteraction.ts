import { injectable } from 'inversify';
import BoardInteraction from '@core/contexts/board/domain/BoardInteraction';
import Board from '../domain/Board';

@injectable()
class ClickBoardInteraction implements BoardInteraction {
  constructor() {}

  // TODO: Create a class to manage the notes and steps
  private getNoteAtPosition(positionX: number, positionY: number) {}

  private getStepAtPosition(positionX: number, positionY: number) {}

  public handleClick(board: Board): void {
    const canvas = board.getCanvas();
    canvas.addEventListener('click', (event) => {
      const { clientX, clientY } = event;

      console.log('Click', clientX, clientY);

      this.getNoteAtPosition(clientX, clientY);
      this.getStepAtPosition(clientY, clientY);
      // this.handleTrack();
    });
  }
}

export default ClickBoardInteraction;
