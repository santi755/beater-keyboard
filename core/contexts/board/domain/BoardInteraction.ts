import Board from '@core/contexts/board/domain/Board';

export default interface BoardInteraction {
  handleClick(): void;
}
