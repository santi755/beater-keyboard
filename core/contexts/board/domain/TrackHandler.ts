import Board from '@core/contexts/board/domain/Board';

export default interface TrackHandler {
  handleTrack(board: Board): void;
}
