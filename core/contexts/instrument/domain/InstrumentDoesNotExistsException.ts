import NotFoundException from '@core/contexts/shared/domain/exceptions/NotFoundException';

export default class InstrumentDoesNotExistsException extends NotFoundException {
  constructor(intrumentId: string) {
    super(`Instrument ${intrumentId} does not exists`, 'instrument_not_found');
  }
}
