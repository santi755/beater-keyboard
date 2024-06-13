import { CanvasContextNotFoundException } from '@core/contexts/board/domain/CanvasContextNotFoundException';
import BoardNotFoundException from '@core/contexts/board/domain/BoardNotFoundException';
import { injectable, inject } from 'inversify';

import type BoardRepository from '@core/contexts/board/domain/BoardRepository';
import Observer from '@core/contexts/shared/domain/events/Observer';
import NoteCreatedEvent from '@core/contexts/shared/domain/events/NoteCreatedEvent';
import { TYPES } from '@core/config/types';
import NoteFactory from '@core/contexts/instrument/infrastructure/NoteFactory';

@injectable()
export default class DrawNoteOnGrid implements Observer<NoteCreatedEvent> {
  constructor(
    @inject(TYPES.BoardRepository)
    private boardRepository: BoardRepository
  ) {}

  public update(data: NoteCreatedEvent): void {
    const board = this.boardRepository.get();

    if (!board) {
      throw new BoardNotFoundException();
    }

    const canvas = board.getCanvas();
    const context = canvas.getContext('2d');

    if (!context) {
      throw new CanvasContextNotFoundException();
    }

    const { x, y } = NoteFactory.createCoordinatesFromNote(data.note);

    context.fillStyle = 'green';
    context.fillRect(
      x,
      y,
      board.getDimension().cellXWidth,
      board.getDimension().cellYHeight
    );

    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.strokeRect(
      x,
      y,
      board.getDimension().cellXWidth,
      board.getDimension().cellYHeight
    );

    context.font = '20px Arial';
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.fillText(
      'Note name',
      x + board.getDimension().cellXWidth / 2,
      y + board.getDimension().cellYHeight / 2
    );

    context.closePath();
  }
}
