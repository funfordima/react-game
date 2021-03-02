import { cellStates } from './cellManager';
import { cellsType } from '../types';

type DelAndIncreaseCellType = {
  cells: cellsType[],
}

const delAndIncreaseCell = (cellsParam: cellsType[], setScore: React.Dispatch<React.SetStateAction<number>>, reff: HTMLAudioElement): DelAndIncreaseCellType => {
  const filterCells = cellsParam.filter((cell) => cell.state !== cellStates.del);

  /* eslint no-param-reassign: ["error", { "props": false }] */
  const cells = filterCells.map((cell) => {
    if (cell.state === cellStates.increase) {
      reff.play();
      setScore((score) => (score + cell.value));
      cell.value *= 2;
    }

    cell.state = cellStates.init;

    return cell;
  })

  return { cells };
};

export default delAndIncreaseCell;
