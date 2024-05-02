import type InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';
import { TYPES } from '@src/config/types';
import { inject, injectable } from 'inversify';
import Instrument from '@core/contexts/instrument/domain/Instrument';

@injectable()
export default class GetSelectedInstrument {
  constructor(
    @inject(TYPES.InstrumentRepository)
    private readonly instrumentRepository: InstrumentRepository
  ) {}

  execute(): Promise<Instrument | null> {
    return this.instrumentRepository.getSelectedInstrument();
  }
}
