export default interface NoteProvider {
  getOctaves(): number[];
  getNotesAvailable(): string[];
}
