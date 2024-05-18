import Observer from '@core/contexts/shared/domain/events/Observer';
// import EventType from '@core/contexts/shared/domain/events/EventTypes';

export default interface Subject<T> {
  subscribe(event: string, observer: Observer<T>): void;
  unsubscribe(event: string, observer: Observer<T>): void;
  notify(event: string, data: T): void;
}
