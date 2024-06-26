import { Container } from 'inversify';
import { TYPES } from '@core/config/types';

import type InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';
import InMemoryInstrumentRepository from '@core/contexts/instrument/infrastructure/repositories/InMemoryInstrumentRepository';

import type NoteRepository from '@core/contexts/instrument/domain/NoteRepository';
import InMemoryNoteRepository from '@core/contexts/instrument/infrastructure/repositories/InMemoryNoteRepository';

import SoundPlayer from '@core/contexts/instrument/domain/SoundPlayer';
import ToneSoundPlayer from '@core/contexts/instrument/infrastructure/ToneSoundPlayer';

import PlayInstrument from '@core/contexts/instrument/application/PlayInstrument';
import ListAvailableInstruments from '@core/contexts/instrument/application/ListAvailableInstrument';
import SelectInstrument from '@core/contexts/instrument/application/SelectInstrument';
import GetSelectedInstrument from '@core/contexts/instrument/application/GetSelectedInstrument';
import ListKeyboardNotes from '@core/contexts/instrument/application/ListKeyboardNotes';
import InitializeInstruments from '@core/contexts/instrument/application/InitializeInstruments';
import AddNoteByInstrument from '@core/contexts/instrument/application/AddNoteByInstrument';

export function configureInstrument(container: Container) {
  container
    .bind<InstrumentRepository>(TYPES.InstrumentRepository)
    .to(InMemoryInstrumentRepository)
    .inSingletonScope();

  container
    .bind<NoteRepository>(TYPES.NoteRepository)
    .to(InMemoryNoteRepository)
    .inSingletonScope();

  container
    .bind<SoundPlayer>(TYPES.SoundPlayer)
    .to(ToneSoundPlayer)
    .inSingletonScope();

  container.bind<PlayInstrument>(TYPES.PlayInstrument).to(PlayInstrument);
  container
    .bind<ListAvailableInstruments>(TYPES.ListAvailableInstruments)
    .to(ListAvailableInstruments);

  container.bind<SelectInstrument>(TYPES.SelectInstrument).to(SelectInstrument);
  container
    .bind<GetSelectedInstrument>(TYPES.GetSelectedInstrument)
    .to(GetSelectedInstrument);

  container
    .bind<ListKeyboardNotes>(TYPES.ListKeyboardNotes)
    .to(ListKeyboardNotes);

  container
    .bind<InitializeInstruments>(TYPES.InitializeInstruments)
    .to(InitializeInstruments);

  container
    .bind<AddNoteByInstrument>(TYPES.AddNoteByInstrument)
    .to(AddNoteByInstrument);
}
