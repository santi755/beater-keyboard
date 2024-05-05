import { Draw } from 'tone';

export const TYPES = {
  // Board
  GridDrawer: Symbol.for('GridDrawer'),
  TrackHandler: Symbol.for('TrackHandler'),
  BoardRepository: Symbol.for('BoardRepository'),
  DrawGrid: Symbol.for('DrawGrid'),
  InitializeBoard: Symbol.for('InitializeBoard'),

  // Instrument
  InstrumentRepository: Symbol.for('InstrumentRepository'),
  NoteRepository: Symbol.for('NoteRepository'),
  CreateInstrument: Symbol.for('CreateInstrument'),
  SoundPlayer: Symbol.for('SoundPlayer'),
  PlayInstrument: Symbol.for('PlayInstrument'),
  ListAvailableInstruments: Symbol.for('ListAvailableInstruments'),
  SelectInstrument: Symbol.for('SelectInstrument'),
  GetSelectedInstrument: Symbol.for('GetSelectedInstrument'),
  ListKeyboardNotes: Symbol.for('ListKeyboardNotes'),
};
