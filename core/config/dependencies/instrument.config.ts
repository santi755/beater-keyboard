import { Container } from 'inversify';
import { TYPES } from '@core/config/types';
import type InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';
import InMemoryInstrumentRepository from '@core/contexts/instrument/infrastructure/InMemoryInstrumentRepository';
import SoundPlayer from '@core/contexts/instrument/domain/SoundPlayer';
import ToneSoundPlayer from '@core/contexts/instrument/infrastructure/ToneSoundPlayer';
import PlayInstrument from '@core/contexts/instrument/application/PlayInstrument';
import ListAvailableInstruments from '@core/contexts/instrument/application/ListAvailableInstrument';
import SelectInstrument from '@core/contexts/instrument/application/SelectInstrument';
import GetSelectedInstrument from '@core/contexts/instrument/application/GetSelectedInstrument';

export function configureInstrument(container: Container) {
  container
    .bind<InstrumentRepository>(TYPES.InstrumentRepository)
    .to(InMemoryInstrumentRepository)
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
}
