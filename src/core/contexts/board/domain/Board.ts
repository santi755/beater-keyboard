import Track from '@/core/contexts/board/domain/Track';
import BoardDimension from '@/core/contexts/board/domain/BoardDimension';

export default class Board {
  constructor(
    private tracks: Track[],
    private playing: boolean,
    private currentStep: number,
    private dimension: BoardDimension
    /*
    readonly tempo: number,
    readonly loop: boolean,
    readonly masterVolume: number
    */
  ) {}

  static create(
    tracks: Track[],
    playing: boolean,
    currentStep: number,
    dimensions: BoardDimension
    /*
    tempo: number,
    loop: boolean,
    masterVolume: number,
    selectedInstrument: any
    */
  ): Board {
    return new Board(
      tracks,
      playing,
      currentStep,
      dimensions
      /*
      tempo,
      loop,
      masterVolume,
      selectedInstrument
      */
    );
  }

  public replay(): void {
    this.playing = true;
    this.currentStep = 0;
  }
}
