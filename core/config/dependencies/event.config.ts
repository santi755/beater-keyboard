import { Container } from 'inversify';
import { TYPES } from '@core/config/types';

import EventNotifier from '@core/contexts/shared/domain/events/EventNotifier';
import ClickEvent from '@core/contexts/shared/domain/events/ClickEvent';

export function configureEvent(container: Container) {
  container
    .bind<EventNotifier<ClickEvent>>(TYPES.EventNotifier)
    .to(EventNotifier)
    .inSingletonScope();
}
