import { expect, vi } from 'vitest';

import InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';
import Instrument from '@core/contexts/instrument/domain/Instrument';

export default class InstrumentRepositoryMock implements InstrumentRepository {
  private saveMock = vi.fn();
  private saveAllMock = vi.fn();
  private findAllMock = vi.fn();
  private getSelectedInstrumentMock = vi.fn();
  private selectInstrumentMock = vi.fn();

  save(instrument: Instrument): Promise<void> {
    return this.saveMock(instrument);
  }

  saveAll(instruments: Instrument[]): Promise<void> {
    return this.saveAllMock(instruments);
  }

  findAll(): Promise<Instrument[]> {
    return this.findAllMock();
  }

  getSelectedInstrument(): Promise<Instrument | null> {
    return this.getSelectedInstrumentMock();
  }

  selectInstrument(instrument: Instrument): void {
    this.selectInstrumentMock(instrument);
  }

  shouldSave(): void {
    expect(this.saveMock).toHaveBeenCalled();
  }

  shouldNotSave(): void {
    expect(this.saveMock).not.toHaveBeenCalled();
  }

  shouldSaveAll(): void {
    expect(this.saveAllMock).toHaveBeenCalled();
  }

  shouldNotSaveAll(): void {
    expect(this.saveAllMock).not.toHaveBeenCalled();
  }
}
