export default class Instrument {
  constructor(public name: string) {}

  static create(name: string): Instrument {
    return new Instrument(name);
  }
}
