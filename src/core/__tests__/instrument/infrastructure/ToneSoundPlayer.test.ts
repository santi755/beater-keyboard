import { test, expect, createMockInstance } from 'vitest';
import { PolySynth, Synth } from 'tone';
import ToneSoundPlayer from '@/core/contexts/instrument/infrastructure/ToneSoundPlayer';
import { PolySynth } from 'tone';

// Mock de PolySynth para Vitest
const mockSynth: PolySynth = createMockInstance(PolySynth);

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

  // Verificamos que el método set del PolySynth haya sido llamado con la configuración correcta
  expect(mockSynth.set).toHaveBeenCalledWith(config);
});

test('ToneSoundPlayer plays sound with given note and duration', () => {
  // Creamos una instancia de ToneSoundPlayer con el PolySynth mockeado
  const player = new ToneSoundPlayer(mockSynth);

  // Llamamos al método playSound con una nota y duración
  const note = 'C4';
  const duration = '4n';
  player.playSound(note, duration);

  // Verificamos que el método triggerAttackRelease del PolySynth haya sido llamado con los argumentos correctos
  expect(mockSynth.triggerAttackRelease).toHaveBeenCalledWith(note, duration);
});
/*
test('ToneSoundPlayer stops sound with given note', () => {
  // Creamos una instancia de ToneSoundPlayer con el PolySynth mockeado
  const player = new ToneSoundPlayer(mockSynth);

  // Llamamos al método stopSound con una nota
  const note = 'C4';
  player.stopSound(note);

  // Verificamos que el método triggerRelease del PolySynth haya sido llamado con la nota correcta
  expect(mockSynth.triggerRelease).toHaveBeenCalledWith(note);
});
*/
