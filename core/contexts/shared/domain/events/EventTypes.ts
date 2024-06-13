import ClickEvent from '@core/contexts/shared/domain/events/ClickEvent';
import NoteCreatedEvent from '@core/contexts/shared/domain/events/NoteCreatedEvent';

type EventTypes = {
  CLICK_EVENT: ClickEvent;
  NOTE_CREATED_EVENT: NoteCreatedEvent;
};

export default EventTypes;
