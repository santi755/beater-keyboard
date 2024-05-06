export default class GridPositionMapper {
  static mapToGridPosition(
    cellWidth: number,
    cellHeight: number,
    x: number,
    y: number
  ): { x: number; y: number } {
    return {
      x: Math.floor(x / cellWidth),
      y: Math.floor(y / cellHeight),
    };
  }
}
