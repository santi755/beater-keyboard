export type Primitives = string | number | boolean;

export default abstract class ValueObject<T extends Primitives> {
  constructor(readonly value: T) {}

  static fromPrimitive(value: string) {
    throw new Error('Method not implemented.');
  }

  static of(value: string) {
    throw new Error('Method not implemented.');
  }

  equals(other: ValueObject<T>) {
    return (
      this.constructor.name === other.constructor.name &&
      this.value === other.value
    );
  }

  toString() {
    return this.value.toString();
  }
}
