import { faker } from '@faker-js/faker';

import Note from '@core/contexts/instrument/domain/Note';

export default class NoteMother {
  static random(
    step: number | null,
    note: string | null,
    duration: number | null
  ): Note {
    return new Note(
      step ?? faker.number.int({ max: 4 }),
      note ?? 'C',
      duration ?? 8 // TODO: Check how to use Note Duration correctly
    );
  }
}
