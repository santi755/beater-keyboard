import Instrument from '@core/contexts/instrument/domain/Instrument';
import Note from '@core/contexts/instrument/domain/Note';

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
