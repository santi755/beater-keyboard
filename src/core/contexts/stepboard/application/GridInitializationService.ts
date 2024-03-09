export default class GridInitializationService {
  constructor() {}

  execute(colsQuantity: number, rowsQuantity: number): any {
    const row = new Array(colsQuantity).fill(false);
    const column = new Array(rowsQuantity).fill(row);

    return column.map(() => [...row]);
  }
}
