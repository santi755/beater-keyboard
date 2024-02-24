import SoundPlayer from "@/core/domain/SoundPlayer";

export default class GuitarService {
  constructor(private soundPlayer: SoundPlayer) {
    this.soundPlayer = soundPlayer;
  }

  playSound(note: string, duration: string): void {
    this.soundPlayer.playSound(note, duration);
  }

  stopSound(note: string): void {
    this.soundPlayer.stopSound(note);
  }
}
