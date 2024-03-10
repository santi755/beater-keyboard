class Stepboard {
  constructor(
    private tracks: any[],
    private tempo: number,
    private playing: boolean,
    private currentStep: number,
    private loop: boolean,
    private masterVolume: number,
    private selectedInstrument: any
  ) {}

  public play(): void {
    this.playing = true;
  }

  public stop(): void {
    this.playing = false;
  }
}
