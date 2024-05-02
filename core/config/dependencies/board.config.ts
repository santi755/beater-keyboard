import { Container } from 'inversify';
import { TYPES } from '@core/config/types';
import GridDrawer from '@core/contexts/board/domain/GridDrawer';
import CanvasGridDrawer from '@core/contexts/board/infrastructure/CanvasGridDrawer';
import TrackHandler from '@core/contexts/board/domain/TrackHandler';
import CanvasTrackHandler from '@core/contexts/board/infrastructure/CanvasTrackHandler';

export function configureBoard(container: Container) {
  container.bind<GridDrawer>(TYPES.GridDrawer).to(CanvasGridDrawer);
  container.bind<TrackHandler>(TYPES.TrackHandler).to(CanvasTrackHandler);
}
