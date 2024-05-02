import type InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';
import { TYPES } from '@core/config/types';
import { inject, injectable } from 'inversify';
import Instrument from '@core/contexts/instrument/domain/Instrument';

@injectable()
export default class SelectInstrument {
  constructor(
    @inject(TYPES.InstrumentRepository)
    private readonly instrumentRepository: InstrumentRepository
  ) {}

  execute(instrument: Instrument): void {
    this.instrumentRepository.selectInstrument(instrument);
  }
}
