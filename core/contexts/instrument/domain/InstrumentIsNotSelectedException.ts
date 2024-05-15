import NotSelectedException from '@core/contexts/shared/domain/exceptions/NotSelectedException';

export default class InstrumentIsNotSelectedException extends NotSelectedException {
  constructor() {
    super('Instrument is not selected', 'instrument_is_not_selected');
  }
}
