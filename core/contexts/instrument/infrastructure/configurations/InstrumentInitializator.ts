import Instrument, {
  InstrumentType,
} from '@core/contexts/instrument/domain/Instrument';
import InstrumentId from '@core/contexts/instrument/domain/InstrumentId';

export default class InstrumentInitializator {
  static async initialize(): Promise<Instrument[]> {
    const piano = this.createPiano();
    const guitar = this.createGuitar();

    return [piano, guitar];
  }

  private static createPiano(): Instrument {
    return new Instrument(
      InstrumentId.generate(),
      'Default piano',
      InstrumentType.PIANO
    );
  }

  private static createGuitar(): Instrument {
    return new Instrument(
      InstrumentId.generate(),
      'Default guitar',
      InstrumentType.GUITAR
    );
  }
}
