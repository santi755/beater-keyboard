import InstrumentId from '@core/contexts/instrument/domain/InstrumentId';
import { faker } from '@faker-js/faker';

export default class InstrumentIdMother {
  static random(id?: string): InstrumentId {
    return InstrumentId.of(id ?? faker.string.uuid());
  }
}
