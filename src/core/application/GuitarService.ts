import SoundPlayer from '@/core/domain/SoundPlayer';
import InstrumentService from '@/core/domain/InstrumentService'

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

export default class GuitarService implements InstrumentService {
  constructor(private soundPlayer: SoundPlayer) {
    this.soundPlayer.initializeInstrument(config);
  }

  playSound(note: string, duration?: string): void {
    this.soundPlayer.playSound(note, duration);
  }

  stopSound(note: string): void {
    this.soundPlayer.stopSound(note);
  }
}
