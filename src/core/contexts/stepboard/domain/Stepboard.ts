import Track from '@/core/contexts/stepboard/domain/Track';

export default class Stepboard {
  constructor(
    readonly tracks: Track[],
    readonly tempo: number,
    readonly playing: boolean,
    readonly currentStep: number,
    readonly loop: boolean,
    readonly masterVolume: number,
    readonly selectedInstrument: any
  ) {}

  static create(
    tracks: Track[],
    tempo: number,
    playing: boolean,
    currentStep: number,
    loop: boolean,
    masterVolume: number,
    selectedInstrument: any
  ): Stepboard {
    return new Stepboard(
      tracks,
      tempo,
      playing,
      currentStep,
      loop,
      masterVolume,
      selectedInstrument
    );
  }

  public addTrack(track: Track): Stepboard {
    return new Stepboard(
      [...this.tracks, track],
      this.tempo,
      this.playing,
      this.currentStep,
      this.loop,
      this.masterVolume,
      this.selectedInstrument
    );
  }

  public play(): Stepboard {
    return new Stepboard(
      this.tracks,
      this.tempo,
      true,
      this.currentStep,
      this.loop,
      this.masterVolume,
      this.selectedInstrument
    );
  }

  public stop(): Stepboard {
    return new Stepboard(
      this.tracks,
      this.tempo,
      false,
      this.currentStep,
      this.loop,
      this.masterVolume,
      this.selectedInstrument
    );
  }
}
