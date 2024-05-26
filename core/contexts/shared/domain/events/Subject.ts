import Observer from '@core/contexts/shared/domain/events/Observer';
// import EventType from '@core/contexts/shared/domain/events/EventTypes';

export default interface Subject<Events> {
  subscribe<K extends keyof Events>(
    event: K,
    observer: Observer<Events[K]>
  ): void;
  unsubscribe<K extends keyof Events>(
    event: K,
    observer: Observer<Events[K]>
  ): void;
  notify<K extends keyof Events>(event: K, data: Events[K]): void;
}
