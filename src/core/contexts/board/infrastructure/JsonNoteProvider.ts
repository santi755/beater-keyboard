import NoteProvider from '@/core/contexts/board/domain/NoteProvider';

export default class HardcodedNoteProvider implements NoteProvider {
  getOctaves(): number[] {
    return [5];
  }
  getNotesAvailable(): string[] {
    return [
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#',
      'A',
      'A#',
      'B',
    ].reverse();
  }
}
