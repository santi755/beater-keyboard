import NotFoundException from '@core/contexts/shared/domain/exceptions/NotFoundException';

export default class CanvasContextNotFoundException extends NotFoundException {
  constructor() {
    super('Canvas context not found', 'canvas_context_not_found');
  }
}
