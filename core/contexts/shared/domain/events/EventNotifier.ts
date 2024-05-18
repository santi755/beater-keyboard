import Subject from '@core/contexts/shared/domain/events/Subject';
import Observer from '@core/contexts/shared/domain/events/Observer';
import { injectable } from 'inversify';
// import EventType from '@core/contexts/shared/domain/events/EventTypes';

@injectable()
export default class EventNotifier<T> implements Subject<T> {
  private observers: Map<string, Observer<T>[]> = new Map();

  public subscribe(event: string, suscriber: Observer<T>): void {
    if (!this.observers.has(event)) {
      this.observers.set(event, []);
    }

    this.observers.get(event)?.push(suscriber);
  }

  public unsubscribe(event: string, subscriber: Observer<T>): void {
    const subscribers = this.observers.get(event);

    if (!subscribers) {
      return;
    }

    this.observers.set(
      event,
      subscribers.filter((sub) => sub !== subscriber)
    );
  }

  public notify(event: string, data: T): void {
    const subscribers = this.observers.get(event);

    if (!subscribers) {
      return;
    }

    subscribers?.forEach((sub) => sub.update(data));
  }
}
