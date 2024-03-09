import Grid from './Grid';

export default interface GridBuilder {
  drawGrid(canvas: HTMLCanvasElement, grid: Grid): void;
}
