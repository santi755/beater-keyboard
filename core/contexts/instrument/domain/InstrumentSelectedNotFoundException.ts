import NotFoundException from '@core/contexts/shared/domain/exceptions/NotFoundException';

export default class InstrumentSelectedNotFoundException extends NotFoundException {
  constructor() {
    super('Instrument selected not found', 'instrument_selected_not_found');
  }
}
