import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';
import type BoardRepository from '@core/contexts/board/domain/BoardRepository';

@injectable()
export default class InitializeBoard {
  constructor(
    @inject(TYPES.BoardRepository)
    private boardRepository: BoardRepository
  ) {}

  public execute(canvas: HTMLCanvasElement): void {
    this.boardRepository.save(canvas);
  }
}
