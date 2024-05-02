import Instrument from '@core/contexts/instrument/domain/Instrument';
import { P } from 'vitest/dist/reporters-MmQN-57K.js';

export default interface InstrumentRepository {
  save(instrument: Instrument): Promise<void>;
  findAll(): Promise<Instrument[]>;
  getSelectedInstrument(): Promise<Instrument | null>;
  selectInstrument(instrument: Instrument): void;
}
