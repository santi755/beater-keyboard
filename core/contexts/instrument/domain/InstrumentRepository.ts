import Instrument from '@core/contexts/instrument/domain/Instrument';

export default interface InstrumentRepository {
  save(instrument: Instrument): Promise<void>;
  saveAll(instruments: Instrument[]): Promise<void>;
  findAll(): Promise<Instrument[]>;
  getSelectedInstrument(): Promise<Instrument | null>;
  selectInstrument(instrument: Instrument): void;
}
