import create from '../cellManager';
import { moveCells, directions } from '../moveCells';
import { cellsType } from '../../types';

const finalPosition = {
  [directions.UP]: [{ x: 1, y: 0, value: 2, id: 'id_1' }, { x: 0, y: 0, value: 4, id: 'id_2' }] as cellsType[],
  [directions.DOWN]: [{ x: 1, y: 3, value: 2, id: 'id_1' }, { x: 0, y: 3, value: 4, id: 'id_2' }] as cellsType[],
  [directions.RIGHT]: [{ x: 3, y: 1, value: 2, id: 'id_1' }, { x: 3, y: 2, value: 4, id: 'id_2' }] as cellsType[],
  [directions.LEFT]: [{ x: 0, y: 1, value: 2, id: 'id_1' }, { x: 0, y: 2, value: 4, id: 'id_2' }] as cellsType[],
};

Object.keys(directions).forEach((direct) => {
  describe(`moving ${direct}`, () => {
    it('move on 3 steps', () => {
      const initCells = [create(1, 1, 2, 'id_1')];

      expect(moveCells(initCells, direct)).toEqual([
        finalPosition[direct][0],
      ]);
    });

    it('move 2 cells', () => {
      const initCells = [create(1, 1, 2, 'id_1'), create(0, 2, 4, 'id_2')];

      expect(moveCells(initCells, direct)).toEqual([
        finalPosition[direct][0],
        finalPosition[direct][1],
      ]);
    });
  });
});
