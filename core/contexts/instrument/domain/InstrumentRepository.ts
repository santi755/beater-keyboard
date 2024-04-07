import Instrument from '@core/contexts/instrument/domain/Instrument';

export default interface InstrumentRepository {
  save(instrument: Instrument): void;
  //findAll(): Instrument[];
  //findById(id: string): Instrument | undefined;
}
