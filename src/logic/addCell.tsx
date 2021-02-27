import create from './cellManager';
import { cellsType } from '../types';
import getRandomCoords from '../utils';

const addCell = (cells: cellsType[]): cellsType[] => {
  const activeCoord = new Set();

  cells.forEach((cell) => activeCoord.add(cell.x * 4 + cell.y));

  if (activeCoord.size === 16) {
    return [...cells];
  }

  let x: number;
  let y: number;
  const coordSize = activeCoord.size;

  do {
    x = getRandomCoords();
    y = getRandomCoords();

    const sum = x * 4 + y;
    activeCoord.add(sum);
  } while (coordSize === activeCoord.size);

  return [...cells, create(x, y, 2)];
};

export default addCell;
