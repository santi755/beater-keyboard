import { v4 as uuidV4, validate } from 'uuid';
import ValueObject from './ValueObject';

export default class Uuid extends ValueObject<string> {
  protected constructor(value: string) {
    super(value);
  }

  static generate(): Uuid {
    return new Uuid(uuidV4());
  }

  static fromPrimitive(value: string): Uuid {
    if (!validate(value)) {
      throw new Error('Invalid UUID');
    }

    return new Uuid(value);
  }

  static of(value: string): Uuid {
    return new Uuid(value);
  }

  equals(other: Uuid): boolean {
    return this.value === other.value;
  }

  toString(): string {
    return this.value;
  }
}
