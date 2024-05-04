import NoteInitializator from '@core/contexts/instrument/infrastructure/configurations/NoteInitializator';
import { injectable } from 'inversify';

@injectable()
export default class ListKeyboardNotes {
  execute() {
    return NoteInitializator.initialize();
  }
}
