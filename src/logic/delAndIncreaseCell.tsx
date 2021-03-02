import { cellStates } from './cellManager';
import { cellsType } from '../types';

type DelAndIncreaseCellType = {
  cells: cellsType[],
  score: number,
}

const delAndIncreaseCell = (cellsParam: cellsType[], initialScore: number): DelAndIncreaseCellType => {
  const filterCells = cellsParam.filter((cell) => cell.state !== cellStates.del);
  let score = initialScore;

  /* eslint no-param-reassign: ["error", { "props": false }] */
  const cells = filterCells.map((cell) => {
    if (cell.state === cellStates.increase) {
      score += cell.value;
      cell.value *= 2;
    }

    cell.state = cellStates.init;

    return cell;
  })

  return { cells, score };
};

export default delAndIncreaseCell;
