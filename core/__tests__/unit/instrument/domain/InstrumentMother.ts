import { faker } from '@faker-js/faker';

import Instrument from '@core/contexts/instrument/domain/Instrument';
import InstrumentType from '@core/contexts/instrument/domain/InstrumentType';
import InstrumentTypeMother from './InstrumentTypeMother';
import InstrumentIdMother from './InstrumentIdMother';
import InstrumentId from '@core/contexts/instrument/domain/InstrumentId';

export default class InstrumentMother {
  static random(
    id: InstrumentId | null,
    name: string | null,
    type: InstrumentType | null
  ): Instrument {
    return new Instrument(
      id ?? InstrumentIdMother.random(),
      name ?? faker.word.noun(),
      type ?? InstrumentTypeMother.random()
    );
  }
}
