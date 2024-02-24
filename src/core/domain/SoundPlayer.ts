export default interface SoundPlayer {
  initializeInstrument(config: any): void;
  playSound(note: string, duration: string): void;
  stopSound(note: string): void;
}
