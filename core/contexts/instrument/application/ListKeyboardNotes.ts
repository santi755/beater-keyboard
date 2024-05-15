import { injectable } from 'inversify';
import NoteInitializator from '@core/contexts/instrument/infrastructure/configurations/NoteInitializator';

@injectable()
export default class ListKeyboardNotes {
  execute() {
    return NoteInitializator.initialize();
  }
}
