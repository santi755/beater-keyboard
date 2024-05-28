export const TYPES = {
  // Board
  GridDrawer: Symbol.for('GridDrawer'),
  BoardInteraction: Symbol.for('BoardInteraction'),
  BoardRepository: Symbol.for('BoardRepository'),
  DrawGrid: Symbol.for('DrawGrid'),
  DrawNoteOnGrid: Symbol.for('DrawNoteOnGrid'),
  InitializeBoard: Symbol.for('InitializeBoard'),
  HandleBoardClick: Symbol.for('HandleBoardClick'),

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
  InitializeInstruments: Symbol.for('InitializeInstruments'),

  // Event
  EventNotifier: Symbol.for('EventNotifier'),
};
