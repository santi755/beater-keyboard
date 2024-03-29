import NoteProvider from '@/core/contexts/stepboard/domain/NoteProvider';

export default class NotesService {
  constructor(private noteProvider: NoteProvider) {}

  public getNotesAvailable(): string[] {
    return this.noteProvider.getNotesAvailable();
  }
}
