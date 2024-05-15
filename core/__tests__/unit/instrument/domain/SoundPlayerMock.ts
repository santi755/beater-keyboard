import Instrument from '@core/contexts/instrument/domain/Instrument';
import SoundPlayer from '@core/contexts/instrument/domain/SoundPlayer';
import { vi, expect } from 'vitest';

export default class SoundPlayerMock implements SoundPlayer {
  private playSoundMock = vi.fn();

  public playSound(
    instrument: Instrument,
    note: string,
    duration: string
  ): void {
    this.playSoundMock(instrument, note, duration);
  }

  shouldPlaySound(
    instrument: Instrument,
    note: string,
    duration: string
  ): void {
    expect(this.playSoundMock).toHaveBeenCalledWith(instrument, note, duration);
  }

  shouldNotPlaySound(): void {
    expect(this.playSoundMock).not.toHaveBeenCalled();
  }
}
