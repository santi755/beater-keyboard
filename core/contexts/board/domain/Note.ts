export default class Note {
  constructor(
    readonly step: number,
    readonly note: string,
    readonly duration: number
  ) {}

  static create(step: number, note: string, duration: number): Note {
    return new Note(step, note, duration);
  }

  toPrimitives(): object {
    return {
      step: this.step,
      note: this.note,
      duration: this.duration,
    };
  }
}
