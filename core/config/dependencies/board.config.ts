import { Container } from 'inversify';
import { TYPES } from '@core/config/types';

import BoardRepository from '@core/contexts/board/domain/BoardRepository';
import InMemoryBoardRepository from '@core/contexts/board/infrastructure/repository/InMemoryBoardRepository';

import DrawGrid from '@core/contexts/board/application/DrawGrid';
import InitializeBoard from '@core/contexts/board/application/InitializeBoard';

import HandleBoardClick from '@core/contexts/board/application/HandleBoardClick';

import GridDrawer from '@core/contexts/board/domain/GridDrawer';
import CanvasGridDrawer from '@core/contexts/board/infrastructure/CanvasGridDrawer';
import BoardInteraction from '@core/contexts/board/domain/BoardInteraction';
import ClickBoardInteraction from '@core/contexts/board/infrastructure/ClickBoardInteraction';

export function configureBoard(container: Container) {
  container.bind<DrawGrid>(TYPES.DrawGrid).to(DrawGrid);
  container.bind<GridDrawer>(TYPES.GridDrawer).to(CanvasGridDrawer);
  container.bind<HandleBoardClick>(TYPES.HandleBoardClick).to(HandleBoardClick);
  container
    .bind<BoardInteraction>(TYPES.BoardInteraction)
    .to(ClickBoardInteraction);
  container
    .bind<BoardRepository>(TYPES.BoardRepository)
    .to(InMemoryBoardRepository)
    .inSingletonScope();
  container
    .bind<InitializeBoard>(TYPES.InitializeBoard)
    .to(InitializeBoard)
    .inSingletonScope();
}
