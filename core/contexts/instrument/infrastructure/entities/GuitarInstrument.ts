import Instrument, {
  InstrumentType,
} from '@core/contexts/instrument/domain/Instrument';
import InstrumentId from '@core/contexts/instrument/domain/InstrumentId';

export default class GuitarInstrument {
  private instrument: Instrument;

  constructor(id: InstrumentId, name: string) {
    this.instrument = new Instrument(id, name, InstrumentType.GUITAR);
  }
}
