import { cellsType } from '../types';

const create = (x: number, y: number, value: number, id: string = Math.random().toString(36).substr(2, 9)): cellsType => ({
  x,
  y,
  value,
  id,
});

export default create;
