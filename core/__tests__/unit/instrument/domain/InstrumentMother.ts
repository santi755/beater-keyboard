import { faker } from '@faker-js/faker';

import Instrument from '@core/contexts/instrument/domain/Instrument';
import InstrumentType from '@core/contexts/instrument/domain/InstrumentType';
import InstrumentTypeMother from './InstrumentTypeMother';
import InstrumentIdMother from './InstrumentIdMother';
import InstrumentId from '@core/contexts/instrument/domain/InstrumentId';

export default class InstrumentMother {
  static random(
    id: InstrumentId,
    name: string,
    type: InstrumentType
  ): Instrument {
    return new Instrument(
      id ?? InstrumentIdMother.random(),
      name ?? faker.word.noun(),
      type ?? InstrumentTypeMother.random()
    );
  }
}
