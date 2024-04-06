import Instrument from '../../instrument/domain/Instrument';
import Note from './Note';

export default class Track {
  constructor(
    readonly notes: Note[],
    readonly instrument: Instrument
  ) {}

  static create(notes: Note[], instrument: Instrument): Track {
    return new Track(notes, instrument);
  }

  public addNote(note: Note): Track {
    return new Track([...this.notes, note], this.instrument);
  }

  public removeNoteAt(step: number): Track {
    return new Track(
      this.notes.filter((note) => note.step !== step),
      this.instrument
    );
  }
}
