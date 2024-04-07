import Instrument, { InstrumentType } from '../domain/Instrument';

export default class InstrumentConfigFactory {
  // TODO: Refactor the any type
  static create(instrument: Instrument): any {
    switch (instrument.type) {
      case InstrumentType.GUITAR:
        return {
          oscillator: {
            type: 'fmsquare',
            modulationType: 'sawtooth',
            modulationIndex: 3,
            harmonicity: 3.4,
          },
          envelope: {
            attack: 0.001,
            decay: 0.1,
            sustain: 0.1,
            release: 0.1,
          },
        };
        break;
      case InstrumentType.BASS:
        return {
          oscillator: {
            type: 'fmsquare',
            modulationType: 'sawtooth',
            modulationIndex: 3,
            harmonicity: 3.4,
          },
          envelope: {
            attack: 0.001,
            decay: 0.1,
            sustain: 0.1,
            release: 0.1,
          },
        };
        break;
      default:
        throw new Error('Invalid instrument type');
    }
  }
}
