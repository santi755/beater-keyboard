export default class Guitar {
  constructor(public name: string) {}

  static create(name: string): Guitar {
    return new Guitar(name);
  }
}
