import create from './cellManager';
import { cellsType } from '../types';

const getRandomCoords = (): number => Math.floor(Math.random() * 3.9);

const initCells = (): Array<cellsType> => {
  const cell1 = create(getRandomCoords(), getRandomCoords(), 2);
  const cell2 = create(getRandomCoords(), getRandomCoords(), 2);

  if (cell1.x === cell2.x && cell1.y === cell2.y) {
    cell1.x = cell1.x === 0 ? 1 : cell1.x - 1;
  }

  return [cell1, cell2];
};

export default initCells;
