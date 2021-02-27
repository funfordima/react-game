import { cellsType } from '../types';
import { cellStates } from './cellManager';
/* eslint @typescript-eslint/no-var-requires: "off" */
const rotateMatrix = require('matrix-rotate');

const directions = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

type ArrayType = Array<cellsType | number>;
type MatrixType = ArrayType[];

const rotateMatrixFromDirection = (matrix: MatrixType, direction: string): void => {
  switch (direction) {
    case directions.LEFT: {
      rotateMatrix(matrix);
      break;
    }
    case directions.DOWN: {
      rotateMatrix(matrix);
      rotateMatrix(matrix);
      break;
    }
    case directions.RIGHT: {
      rotateMatrix(matrix);
      rotateMatrix(matrix);
      rotateMatrix(matrix);
      break;
    }
    default: break;
  }
};

const rotateMatrixToDirection = (matrix: MatrixType, direction: string): void => {
  switch (direction) {
    case directions.LEFT: {
      rotateMatrix(matrix);
      rotateMatrix(matrix);
      rotateMatrix(matrix);
      break;
    }
    case directions.DOWN: {
      rotateMatrix(matrix);
      rotateMatrix(matrix);
      break;
    }
    case directions.RIGHT: {
      rotateMatrix(matrix);
      break;
    }
    default: break;
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const moveCell = (matrix: MatrixType, x: number, y: number): void => {
  let nextRow = y - 1;
  let currentRow = y;

  while (nextRow >= 0) {
    if (matrix[nextRow][x] === 0) {
      matrix[nextRow][x] = matrix[currentRow][x];
      (matrix[currentRow][x] as cellsType).state = cellStates.move;
      matrix[currentRow][x] = 0;

      currentRow = nextRow;
    } else if ((matrix[nextRow][x] as cellsType).value === (matrix[currentRow][x] as cellsType).value) {
      (matrix[nextRow][x] as cellsType).state = cellStates.del;
      (matrix[nextRow][x] as cellsType).by = matrix[currentRow][x] as cellsType;
      (matrix[currentRow][x] as cellsType).state = cellStates.increase;
      matrix[nextRow][x] = matrix[currentRow][x];
      matrix[currentRow][x] = 0;

      currentRow = nextRow;
    } else {
      break;
    }

    nextRow -= 1;
  }
};

const moveCells = (initCells: Array<cellsType>, direction: string): Array<cellsType> => {
  const cells = initCells.map((cell) => JSON.parse(JSON.stringify(cell)));

  const matrix = Array.from(new Array(4), () =>
    Array.from(new Array(4), () => 0));

  /* eslint no-return-assign: "error" */
  cells.forEach((cell: cellsType) => ((matrix[cell.y][cell.x] as unknown as cellsType) = cell));
  // printMatrix(matrix);

  rotateMatrixFromDirection(matrix, direction);

  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      if (matrix[y][x] !== 0) {
        moveCell(matrix, x, y);
      }
    }
  }

  rotateMatrixToDirection(matrix, direction);

  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      if (matrix[y][x] !== 0 && typeof matrix[y][x] === 'object') {
        (matrix[y][x] as unknown as cellsType).y = y;
        (matrix[y][x] as unknown as cellsType).x = x;
      }
    }
  }

  cells
    .filter((cell) => cell.by !== null)
    .forEach((cell) => {
      cell.x = cell.by.x;
      cell.y = cell.by.y;

      delete cell.by;
    });

  // printMatrix(matrix);

  return cells;
};

export { moveCells, directions };
