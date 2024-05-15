import NotFoundException from '@core/contexts/shared/domain/exceptions/NotFoundException';

export default class BoardNotFoundException extends NotFoundException {
  constructor() {
    super('Board not found', 'board_not_found');
  }
}
