export default interface SoundPlayer {
  playSound(note: string, duration: string): void;
  stopSound(note: string): void;
}
