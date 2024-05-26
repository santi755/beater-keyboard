import Subject from '@core/contexts/shared/domain/events/Subject';
import Observer from '@core/contexts/shared/domain/events/Observer';
import { injectable } from 'inversify';

@injectable()
export default class EventNotifier<Events> implements Subject<Events> {
  private observers: Map<keyof Events, Observer<Events[keyof Events]>[]> =
    new Map();

  public subscribe<K extends keyof Events>(
    event: K,
    suscriber: Observer<Events[K]>
  ): void {
    if (!this.observers.has(event)) {
      this.observers.set(event, []);
    }

    this.observers.get(event)?.push(suscriber);
  }

  public unsubscribe<K extends keyof Events>(
    event: K,
    subscriber: Observer<Events[K]>
  ): void {
    const subscribers = this.observers.get(event);

    if (!subscribers) {
      return;
    }

    this.observers.set(
      event,
      subscribers.filter((sub) => sub !== subscriber)
    );
  }

  public notify<K extends keyof Events>(event: K, data: Events[K]): void {
    const subscribers = this.observers.get(event);

    if (!subscribers) {
      return;
    }

    subscribers?.forEach((sub) => sub.update(data));
  }
}
