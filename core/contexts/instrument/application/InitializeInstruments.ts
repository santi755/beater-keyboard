import { inject, injectable } from 'inversify';
import { TYPES } from '@core/config/types';
import type InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';
import InstrumentInitializator from '@core/contexts/instrument/infrastructure/configurations/InstrumentInitializator';

@injectable()
export default class InitializeInstruments {
  constructor(
    @inject(TYPES.InstrumentRepository)
    private instrumentRepository: InstrumentRepository
  ) {}

  async execute(): Promise<void> {
    const instruments = await this.instrumentRepository.findAll();

    if (instruments.length > 0) {
      return;
    }

    const initializedInstruments = await InstrumentInitializator.initialize();
    this.instrumentRepository.saveAll(initializedInstruments);
  }
}
