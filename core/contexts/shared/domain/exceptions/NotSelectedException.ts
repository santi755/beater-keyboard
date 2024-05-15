import DomainException from '@core/contexts/shared/domain/exceptions/DomainException';

export default class NotSelectedException extends DomainException {
  constructor(
    public message: string,
    public code: string
  ) {
    super(message, code);
  }
}
