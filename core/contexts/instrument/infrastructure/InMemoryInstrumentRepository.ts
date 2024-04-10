import { injectable } from 'inversify';
import Instrument from '@core/contexts/instrument/domain/Instrument';
import InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';

@injectable()
class InMemoryInstrumentRepository implements InstrumentRepository {
  private instruments: Instrument[] = [];

  async save(instrument: Instrument): Promise<void> {
    this.instruments.push(instrument);
  }
}

export default InMemoryInstrumentRepository;
