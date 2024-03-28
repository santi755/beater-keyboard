type NoteInfo = {
  volume: number;
  duration: number;
  step: number;
};
export type gridMatrix = Map<String, NoteInfo[]>;

export default class StepboardGrid {
  constructor(
    public matrix: gridMatrix,
    public cellWidth: number,
    public cellHeight: number
  ) {}

  static create(
    steps: number,
    notes: Array<string>,
    cellWidth: number,
    cellHeight: number
  ): StepboardGrid {
    const matrix = new Map<String, NoteInfo[]>();
    notes.forEach((note) => {
      matrix.set(
        note,
        new Array(steps)
          .fill(null)
          .map((_, index) => ({ volume: 0, duration: 0, step: index }))
      );
    });

    return new StepboardGrid(matrix, cellWidth, cellHeight);
  }

  toPrimitives(): object {
    return {
      matrix: this.matrix,
      cellWidth: this.cellWidth,
      cellHeight: this.cellHeight,
    };
  }
}
