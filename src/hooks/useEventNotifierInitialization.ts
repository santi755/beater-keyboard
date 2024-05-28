import DrawNoteOnGrid from '@core/contexts/board/application/DrawNoteOnGrid';
import { TYPES } from '@core/config/types';
import GridDrawer from '@core/contexts/board/domain/GridDrawer';
import EventTypes from '@core/contexts/shared/domain/events/EventTypes';
import EventNotifier from '@core/contexts/shared/domain/events/EventNotifier';
import ClickEvent from '@core/contexts/shared/domain/events/ClickEvent';
import Observer from '@core/contexts/shared/domain/events/Observer';
import { Container } from 'inversify';
import { useEffect } from 'react';

function useEventNotifierInitialization(container: Container) {
  useEffect(() => {
    const drawNoteOnGrid = container.get<DrawNoteOnGrid & Observer<ClickEvent>>(
      TYPES.DrawNoteOnGrid
    );

    const eventNotifier = container.get<EventNotifier<EventTypes>>(
      TYPES.EventNotifier
    );

    eventNotifier.subscribe('CLICK_EVENT', drawNoteOnGrid);
  }, [container]);
}

export default useEventNotifierInitialization;
