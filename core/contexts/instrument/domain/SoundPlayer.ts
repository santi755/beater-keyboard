import Instrument from '@core/contexts/instrument/domain/Instrument';
export default interface SoundPlayer {
  playSound(instrument: Instrument, note: string, duration: string): void;
}
