import { faker } from '@faker-js/faker';

import Note from '@core/contexts/instrument/domain/Note';

export default class NoteMother {
  static random(step: number, note: string, duration: number): Note {
    return new Note(
      step ?? faker.number.int({ max: 4 }),
      note ?? 'C',
      duration ?? '8n'
    );
  }
}
