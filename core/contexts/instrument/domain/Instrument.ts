import InstrumentId from './InstrumentId';

export enum InstrumentType {
  GUITAR = 'guitar',
  BASS = 'bass',
  PIANO = 'piano',
}

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
