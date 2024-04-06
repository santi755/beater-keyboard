import Track from '@/core/contexts/board/domain/Track';
import BoardDimension from '@/core/contexts/board/domain/BoardDimension';

export default class Board {
  constructor(
    private tracks: Track[],
    private playing: boolean,
    private currentStep: number,
    private dimension: BoardDimension
  ) {}

  static create(
    tracks: Track[],
    playing: boolean,
    currentStep: number,
    dimensions: BoardDimension
  ): Board {
    return new Board(tracks, playing, currentStep, dimensions);
  }

  public replay(): void {
    this.playing = true;
    this.currentStep = 0;
  }

  // TODO: Check if this is the right way to do it
  public getOctaves(): number[] {
    return [5];
  }

  // TODO: Check if this is the right way to do it
  public getNotesAvailable(): string[] {
    return [
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#',
      'A',
      'A#',
      'B',
    ].reverse();
  }

  public getDimensions(): BoardDimension {
    return this.dimension;
  }
}
