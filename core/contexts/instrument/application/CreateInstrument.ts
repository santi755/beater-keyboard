import { inject, injectable } from 'inversify';
import { TYPES } from '@src/config/types';

import type InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';
import Instrument, {
  InstrumentType,
} from '@core/contexts/instrument/domain/Instrument';
import InstrumentId from '@core/contexts/instrument/domain/InstrumentId';

@injectable()
export default class CreateInstrument {
  constructor(
    @inject(TYPES.InstrumentRepository)
    private readonly instrumentRepository: InstrumentRepository
  ) {}

  public create(name: string, type: InstrumentType): Instrument {
    const instrument = Instrument.create(InstrumentId.generate(), name, type);

    this.instrumentRepository.save(instrument);

    return instrument;
  }
}
