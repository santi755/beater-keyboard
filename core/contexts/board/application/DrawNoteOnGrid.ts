import { injectable } from 'inversify';
import Observer from '@core/contexts/shared/domain/events/Observer';
import ClickEvent from '@core/contexts/shared/domain/events/ClickEvent';

@injectable()
export default class DrawNoteOnGrid implements Observer<ClickEvent> {
  public update(data: ClickEvent): void {
    console.log('ClickBoardInteraction notified with data: ', data);
  }
}
