import { injectable } from 'inversify';

import Instrument from '@core/contexts/instrument/domain/Instrument';
import InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';

@injectable()
class InMemoryInstrumentRepository implements InstrumentRepository {
  private instruments: Instrument[] = [];
  private selectedInstrument: Instrument | null = null;

  async findAll(): Promise<Instrument[]> {
    return this.instruments;
  }

  async save(instrument: Instrument): Promise<void> {
    this.instruments.push(instrument);
  }

  async saveAll(instruments: Instrument[]): Promise<void> {
    this.instruments = instruments;
  }

  selectInstrument(instrument: Instrument): void {
    this.selectedInstrument = instrument;
  }

  async getSelectedInstrument(): Promise<Instrument | null> {
    return this.selectedInstrument;
  }
}

export default InMemoryInstrumentRepository;
