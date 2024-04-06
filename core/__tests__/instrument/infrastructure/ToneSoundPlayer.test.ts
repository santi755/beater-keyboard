import { test, expect, describe, vi } from 'vitest';
import { PolySynth } from 'tone';
import ToneSoundPlayer from '@core/contexts/instrument/infrastructure/ToneSoundPlayer';

const mockSynth: PolySynth = {
  set: vi.fn(),
  triggerAttackRelease: vi.fn(),
  triggerRelease: vi.fn(),
} as unknown as PolySynth;

describe('ToneSoundPlayer', () => {
  test('ToneSoundPlayer initializes instrument with config', () => {
    const player = new ToneSoundPlayer(mockSynth);
    const config = {
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

    player.initializeInstrument(config);

    expect(mockSynth.set).toHaveBeenCalledWith(config);
  });

  test('ToneSoundPlayer plays sound with given note and duration', () => {
    const player = new ToneSoundPlayer(mockSynth);
    const note = 'C4';
    const duration = '4n';

    player.playSound(note, duration);

    expect(mockSynth.triggerAttackRelease).toHaveBeenCalledWith(note, duration);
  });

  test('ToneSoundPlayer stops sound with given note', () => {
    const player = new ToneSoundPlayer(mockSynth);
    const note = 'C4';

    player.stopSound(note);

    expect(mockSynth.triggerRelease).toHaveBeenCalledWith(note);
  });
});
