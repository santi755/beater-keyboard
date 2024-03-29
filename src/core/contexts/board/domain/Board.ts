import Track from '@/core/contexts/board/domain/Track';

export default class Board {
  constructor(
    readonly tracks: Track[]
    /*readonly tempo: number,
    readonly playing: boolean,
    readonly currentStep: number,
    readonly loop: boolean,
    readonly masterVolume: number,
    readonly selectedInstrument: any*/
  ) {}

  static create(
    tracks: Track[]
    /*tempo: number,
    playing: boolean,
    currentStep: number,
    loop: boolean,
    masterVolume: number,
    selectedInstrument: any*/
  ): Board {
    return new Board(
      tracks
      /*tempo,
      playing,
      currentStep,
      loop,
      masterVolume,
      selectedInstrument*/
    );
  }
}
