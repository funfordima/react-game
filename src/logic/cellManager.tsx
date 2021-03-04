import { cellsType } from '../types';

export const cellStates = {
  init: 'init',
  move: 'move',
  del: 'del',
  increase: 'increase',
};

const create = (x: number, y: number, value: number, id: string = Math.random().toString(36).substr(2, 9)): cellsType => ({
  x,
  y,
  value,
  id,
  state: cellStates.init,
  by: null,
});

export default create;
