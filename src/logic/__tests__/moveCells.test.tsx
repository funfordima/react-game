import create from '../cellManager';
import { moveCells, directions } from '../moveCells';

describe('moving UP', () => {
  it('move on 3 steps', () => {
    const initCells = [create(1, 3, 2, 'test')];

    expect(moveCells(initCells, directions.UP)).toEqual([
      { x: 1, y: 0, value: 2, id: 'test' }
    ]);
  });

  it('move 2 cells', () => {
    const initCells = [create(1, 3, 2, 'test'), create(2, 3, 4, 'test1')];

    expect(moveCells(initCells, directions.UP)).toEqual([
      { x: 1, y: 0, value: 2, id: 'test' },
      { x: 2, y: 0, value: 4, id: 'test1' },
    ]);
  });
});
