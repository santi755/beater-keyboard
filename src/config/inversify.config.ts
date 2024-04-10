import 'reflect-metadata';
import { Container } from 'inversify';

import { TYPES } from './types';

import GridDrawer from '@core/contexts/board/domain/GridDrawer';
import CanvasGridDrawer from '@core/contexts/board/infrastructure/CanvasGridDrawer';

import TrackHandler from '@core/contexts/board/domain/TrackHandler';
import CanvasTrackHandler from '@core/contexts/board/infrastructure/CanvasTrackHandler';

import type InstrumentRepository from '@core/contexts/instrument/domain/InstrumentRepository';
import InMemoryInstrumentRepository from '@core/contexts/instrument/infrastructure/InMemoryInstrumentRepository';
import CreateInstrument from '@core/contexts/instrument/application/CreateInstrument';

import SoundPlayer from '@core/contexts/instrument/domain/SoundPlayer';
import ToneSoundPlayer from '@core/contexts/instrument/infrastructure/ToneSoundPlayer';
import PlayInstrument from '@core/contexts/instrument/application/PlayInstrument';

const container = new Container();

container.bind<GridDrawer>(TYPES.GridDrawer).to(CanvasGridDrawer);
container.bind<TrackHandler>(TYPES.TrackHandler).to(CanvasTrackHandler);

container
  .bind<InstrumentRepository>(TYPES.InstrumentRepository)
  .to(InMemoryInstrumentRepository);
container.bind<CreateInstrument>(TYPES.CreateInstrument).to(CreateInstrument);

container.bind<SoundPlayer>(TYPES.SoundPlayer).to(ToneSoundPlayer);
container.bind<PlayInstrument>(TYPES.PlayInstrument).to(PlayInstrument);

export default container;
