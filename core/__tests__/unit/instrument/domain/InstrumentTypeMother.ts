import InstrumentType, {
  InstrumentTypeEnum,
} from '@core/contexts/instrument/domain/InstrumentType';

export default class InstrumentTypeMother {
  static random(value?: string | null): InstrumentType {
    return InstrumentType.of(value ?? InstrumentTypeEnum.GUITAR);
  }
}
