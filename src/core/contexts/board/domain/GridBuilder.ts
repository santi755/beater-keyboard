import StepboardGrid from './StepboardGrid';

export default interface GridBuilder {
  drawGrid(canvas: HTMLCanvasElement, stepboardGrid: StepboardGrid): void;
}
