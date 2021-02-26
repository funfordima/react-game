import { cellsType } from '../types';

const create = (x: number, y: number, value: number): cellsType => ({
  x,
  y,
  value,
  id: Math.random().toString(36).substr(2, 9),
});

export default create;
