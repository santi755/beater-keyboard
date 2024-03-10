export default class Track {
  constructor(
    private readonly numSteps: number,
    private readonly numNotes: number,
    private notes: boolean[][]
  ) {
    this.notes = this.initializeNotes();
  }

  private initializeNotes(): boolean[][] {
    const steps = new Array(this.numSteps).fill(false);
    const notes = new Array(this.numNotes).fill(steps);

    return notes.map(() => [...steps]);
  }
}
