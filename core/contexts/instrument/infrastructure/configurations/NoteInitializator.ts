import noteConfigurations from '@core/contexts/instrument/infrastructure/configurations/NoteConfigurations';

const OCTAVES = 4;

export default class NoteInitializator {
  static initialize() {
    const notes: string[] = [];
    const octaveNotes = noteConfigurations.get('octaveNotes');

    for (let i = 0; i < OCTAVES; i++) {
      octaveNotes?.forEach((note) => {
        notes.push(`${note}${i}`);
      });
    }

    return notes;
  }
}
