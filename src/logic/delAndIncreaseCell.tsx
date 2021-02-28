import { cellStates } from './cellManager';
import { cellsType } from '../types';

type DelAndIncreaseCellType = {
  newCells: cellsType[],
  score: number,
}

const delAndIncreaseCell = (cells: cellsType[], initialScore: number): DelAndIncreaseCellType => {
  const filterCells = cells.filter((cell) => cell.state !== cellStates.del);
  let score = initialScore;

  /* eslint no-param-reassign: ["error", { "props": false }] */
  const newCells = filterCells.map((cell) => {
    if (cell.state === cellStates.increase) {
      score += cell.value;
      cell.value *= 2;
    }

    cell.state = cellStates.init;

    return cell;
  })

  return { newCells, score };
};

export default delAndIncreaseCell;
