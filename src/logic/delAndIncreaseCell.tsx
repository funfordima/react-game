import { cellStates } from './cellManager';
import { cellsType } from '../types';

const delAndIncreaseCell = (cells: cellsType[]): cellsType[] => {
  const filterCells = cells.filter((cell) => cell.state !== cellStates.del);

  /* eslint no-param-reassign: ["error", { "props": false }] */
  return filterCells.map((cell) => {
    if (cell.state === cellStates.increase) {
      cell.value *= 2;
    }

    cell.state = cellStates.init;

    return cell;
  })
};

export default delAndIncreaseCell;
