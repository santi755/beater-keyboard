export default class Track {
  constructor(
    public numSteps: number,
    public numNotes: number,
    public notes: boolean[][]
  ) {}

  static create(numSteps: number, numNotes: number): Track {
    const steps = new Array(numSteps).fill(false);
    const notes = new Array(numNotes).fill(steps);

    return new Track(numSteps, numNotes, notes);
  }

  activateNote = (noteIndex: number, stepIndex: number): void => {
    this.notes[noteIndex][stepIndex] = true;
  };

  deactivateNote = (noteIndex: number, stepIndex: number): void => {
    this.notes[noteIndex][stepIndex] = false;
  };
}
