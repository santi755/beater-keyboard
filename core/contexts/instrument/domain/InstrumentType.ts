import ValueObject from '@core/contexts/shared/domain/ValueObject';

export enum InstrumentTypeEnum {
  BASS = 'bass',
  GUITAR = 'guitar',
  PIANO = 'piano',
}

export default class InstrumentType extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  static of(value: string): InstrumentType {
    const entry = Object.entries(InstrumentTypeEnum).find(
      ([_, item]) => item === value
    );

    if (!entry) {
      throw new Error('Invalid instrument type');
    }

    return new InstrumentType(value);
  }

  static fromPrimitive(value: string): InstrumentType {
    return new InstrumentType(value);
  }

  isBass(): boolean {
    return this.value === InstrumentTypeEnum.BASS;
  }

  isPiano(): boolean {
    return this.value === InstrumentTypeEnum.PIANO;
  }

  isGuitar(): boolean {
    return this.value === InstrumentTypeEnum.GUITAR;
  }
}
