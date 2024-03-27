import Track from '@/core/contexts/stepboard/domain/Track';

export default class Stepboard {
  constructor(
    public tracks: Track[],
    public tempo: number,
    public playing: boolean,
    public currentStep: number,
    public loop: boolean,
    public masterVolume: number,
    public selectedInstrument: any
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

  public addTrack(track: Track): void {
    this.tracks.push(track);
  }

  public play(): void {
    this.playing = true;
  }

  public stop(): void {
    this.playing = false;
  }
}
