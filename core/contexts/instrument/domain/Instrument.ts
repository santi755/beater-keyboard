import InstrumentId from './InstrumentId';
import InstrumentType from './InstrumentType';

export default class Instrument {
  constructor(
    public id: InstrumentId,
    public name: string,
    public type: InstrumentType
  ) {}

  static create(
    id: InstrumentId,
    name: string,
    type: InstrumentType
  ): Instrument {
    return new Instrument(id, name, type);
  }
}
