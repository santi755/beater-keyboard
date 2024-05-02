import 'reflect-metadata';
import { Container } from 'inversify';

import { TYPES } from './types';

import GridDrawer from '@core/contexts/board/domain/GridDrawer';
import CanvasGridDrawer from '@core/contexts/board/infrastructure/CanvasGridDrawer';

import TrackHandler from '@core/contexts/board/domain/TrackHandler';
import CanvasTrackHandler from '@core/contexts/board/infrastructure/CanvasTrackHandler';

import type InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';
import InMemoryInstrumentRepository from '@core/contexts/instrument/infrastructure/InMemoryInstrumentRepository';

import SoundPlayer from '@core/contexts/instrument/domain/SoundPlayer';
import ToneSoundPlayer from '@core/contexts/instrument/infrastructure/ToneSoundPlayer';
import PlayInstrument from '@core/contexts/instrument/application/PlayInstrument';

import ListAvailableInstruments from '@core/contexts/instrument/application/ListAvailableInstrument';
import SelectInstrument from '@core/contexts/instrument/application/SelectInstrument';
import GetSelectedInstrument from '@core/contexts/instrument/application/GetSelectedInstrument';

const container = new Container();

container.bind<GridDrawer>(TYPES.GridDrawer).to(CanvasGridDrawer);
container.bind<TrackHandler>(TYPES.TrackHandler).to(CanvasTrackHandler);

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

export default container;
