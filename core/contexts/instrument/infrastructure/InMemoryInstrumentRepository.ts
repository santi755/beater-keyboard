import { injectable } from 'inversify';

import Instrument from '@core/contexts/instrument/domain/Instrument';
import InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';
import InstrumentInitializator from './configurations/InstrumentInitializator';

@injectable()
class InMemoryInstrumentRepository implements InstrumentRepository {
  private instruments: Instrument[] = [];
  private selectedInstrument: Instrument | null = null;

  constructor() {
    this.initializeIfNeeded();
  }

  private async initializeIfNeeded(): Promise<void> {
    if (this.instruments.length === 0) {
      this.instruments = await InstrumentInitializator.initialize();
    }
  }
  async findAll(): Promise<Instrument[]> {
    return this.instruments;
  }

  async save(instrument: Instrument): Promise<void> {
    this.instruments.push(instrument);
  }

  selectInstrument(instrument: Instrument): void {
    this.selectedInstrument = instrument;
  }

  async getSelectedInstrument(): Promise<Instrument | null> {
    return this.selectedInstrument;
  }
}

export default InMemoryInstrumentRepository;
