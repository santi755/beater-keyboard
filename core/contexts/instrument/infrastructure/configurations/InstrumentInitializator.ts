import Instrument from '@core/contexts/instrument/domain/Instrument';
import InstrumentId from '@core/contexts/instrument/domain/InstrumentId';
import InstrumentType from '@core/contexts/instrument/domain/InstrumentType';

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
      InstrumentType.of('piano')
    );
  }

  private static createGuitar(): Instrument {
    return new Instrument(
      InstrumentId.generate(),
      'Default guitar',
      InstrumentType.of('guitar')
    );
  }
}
