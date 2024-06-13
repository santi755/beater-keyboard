import { inject, injectable } from 'inversify';
import Instrument from '@core/contexts/instrument/domain/Instrument';
import type SoundPlayer from '../domain/SoundPlayer';
import { TYPES } from '@core/config/types';
import Note from '@core/contexts/instrument/domain/Note';
import type NoteRepository from '@core/contexts/instrument/domain/NoteRepository';
import Observer from '@core/contexts/shared/domain/events/Observer';
import ClickEvent from '@core/contexts/shared/domain/events/ClickEvent';
import NoteFactory from '@core/contexts/instrument/infrastructure/NoteFactory';
import type InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';
import InstrumentIsNotSelectedException from '@core/contexts/instrument/domain/InstrumentIsNotSelectedException';
import EventNotifier from '@core/contexts/shared/domain/events/EventNotifier';
import EventTypes from '@core/contexts/shared/domain/events/EventTypes';

@injectable()
export default class AddNoteByInstrument implements Observer<ClickEvent> {
  constructor(
    @inject(TYPES.InstrumentRepository)
    private instrumentRepository: InstrumentRepository,
    @inject(TYPES.NoteRepository)
    private noteRepository: NoteRepository,
    @inject(TYPES.EventNotifier)
    private eventNotifier: EventNotifier<EventTypes>
  ) {}

  public async update(data: ClickEvent): Promise<void> {
    const instrument = await this.instrumentRepository.getSelectedInstrument();

    if (!instrument) {
      throw new InstrumentIsNotSelectedException();
    }

    const note = NoteFactory.createNoteFromCoordinates(data.x, data.y);
    this.noteRepository.setNotesByInstrument(
      instrument.id,
      this.noteRepository.getNotesByInstrument(instrument.id).concat(note)
    );

    this.eventNotifier.notify('NOTE_CREATED_EVENT', {
      x: data.x,
      y: data.y,
      note: note,
    });
  }
}
