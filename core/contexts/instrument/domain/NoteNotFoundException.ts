import NotFoundException from '@core/contexts/shared/domain/exceptions/NotFoundException';

export default class NoteNotFoundException extends NotFoundException {
  constructor() {
    super('Note not found', 'note_not_found');
  }
}
