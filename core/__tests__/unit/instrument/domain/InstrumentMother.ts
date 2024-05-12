import Instrument, {
  InstrumentType,
} from '@core/contexts/instrument/domain/Instrument';
import InstrumentIdMother from './InstrumentIdMother';
import { faker } from '@faker-js/faker';
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
      type ?? InstrumentType.GUITAR // TODO: Change to random
    );
  }
}
