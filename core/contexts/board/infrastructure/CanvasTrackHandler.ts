import { injectable } from 'inversify';
import TrackHandler from '@core/contexts/board/domain/TrackHandler';
import Board from '../domain/Board';

@injectable()
class CanvasTrackHandler implements TrackHandler {
  constructor(
    private board: Board,
    private canvas: HTMLCanvasElement
  ) {
    this.setupClickListener();
  }

  private setupClickListener(): void {
    this.canvas.addEventListener('click', (event) => {
      const { clientX, clientY } = event;

      this.getNoteAtPosition(clientX, clientY);
      this.getStepAtPosition(clientY, clientY);
      this.handleTrack();
    });
  }

  // TODO: Create a class to manage the notes and steps
  private getNoteAtPosition(positionX: number, positionY: number) {}

  private getStepAtPosition(positionX: number, positionY: number) {}

  /*
        The board should has a method to get selected track
        The track should has a property to get isSelected
    */
  public handleTrack(): void {}
}

export default CanvasTrackHandler;
