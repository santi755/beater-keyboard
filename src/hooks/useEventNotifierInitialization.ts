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
    const gridDrawer = container.get<GridDrawer & Observer<ClickEvent>>(
      TYPES.GridDrawer
    );

    const eventNotifier = container.get<EventNotifier<EventTypes>>(
      TYPES.EventNotifier
    );

    eventNotifier.subscribe('CLICK_EVENT', gridDrawer);
  }, [container]);
}

export default useEventNotifierInitialization;
