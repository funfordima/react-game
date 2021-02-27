import create from '../cellManager';
import { cellStates } from '../cellManager';
import { moveCells, directions } from '../moveCells';
import { cellsType } from '../../types';

const finalPosition = {
  [directions.UP]: [{ x: 1, y: 0, value: 2, id: 'id_1', state: cellStates.move }, { x: 2, y: 0, value: 4, id: 'id_2', state: cellStates.move }] as cellsType[],
  [directions.DOWN]: [{ x: 1, y: 3, value: 2, id: 'id_1', state: cellStates.move }, { x: 2, y: 3, value: 4, id: 'id_2', state: cellStates.move }] as cellsType[],
  [directions.RIGHT]: [{ x: 3, y: 1, value: 2, id: 'id_1', state: cellStates.move }, { x: 3, y: 2, value: 4, id: 'id_2', state: cellStates.move }] as cellsType[],
  [directions.LEFT]: [{ x: 0, y: 1, value: 2, id: 'id_1', state: cellStates.move }, { x: 0, y: 2, value: 4, id: 'id_2', state: cellStates.move }] as cellsType[],
};

Object.keys(directions).forEach((direct) => {
  describe(`moving ${direct}`, () => {
    it('move 1 cell', () => {
      const initCells = [create(1, 1, 2, 'id_1')];

      expect(moveCells(initCells, direct)).toEqual([
        finalPosition[direct][0],
      ]);
    });

    it('move 2 cells', () => {
      const initCells = [create(1, 1, 2, 'id_1'), create(2, 2, 4, 'id_2')];

      expect(moveCells(initCells, direct)).toEqual([
        finalPosition[direct][0],
        finalPosition[direct][1],
      ]);
    });
  });
});

describe('increase value', () => {
  it('move 2 cells', () => {
    const initCells = [create(1, 3, 2, 'id_1'), create(1, 0, 2, 'id_2')];

    expect(moveCells(initCells, directions.UP)).toEqual([
      { x: 1, y: 0, value: 2, id: 'id_1', state: cellStates.increase },
      { x: 1, y: 0, value: 2, id: 'id_2', state: cellStates.del },
    ]);
  });
});
