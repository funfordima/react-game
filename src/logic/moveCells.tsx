import { cellsType } from '../types';
const rotateMatrix = require('matrix-rotate');

const directions = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

type matrix = Array<number | string>;

function printMatrix(matrix: matrix[]): void {
  let printString = '[\n';

  Array.from(new Array(4), (x, i) => i)
    .forEach((colNum) => {
      printString += ' ';
      printString += Array.from(new Array(4), (x, i) => i)
        .map((rowNum) => JSON.stringify(matrix[colNum][rowNum])
          .padStart(25, ' '))
        .join(', ');
      printString += ',\n';
    });

  printString += ']';
  console.log(printString);
}

const rotateMatrixFromDirection = (matrix: matrix[], direction: string): void => {
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

const rotateMatrixToDirection = (matrix: matrix[], direction: string): void => {
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

const moveCell = (matrix: matrix[], x: number, y: number): void => {
  let nextRow = y - 1;
  let currentRow = y;

  while (nextRow >= 0) {
    if (matrix[nextRow][x] === 0) {
      matrix[nextRow][x] = matrix[currentRow][x];
      matrix[currentRow][x] = 0;

      currentRow = nextRow;
    }

    nextRow -= 1;
  }
};

const moveCells = (initCells: Array<cellsType>, direction: string): Array<cellsType> => {
  const matrix = Array.from(new Array(4), () =>
    Array.from(new Array(4), () => 0));

  initCells.forEach((cell) => matrix[cell.y][cell.x] = cell);
  printMatrix(matrix);

  rotateMatrixFromDirection(matrix, direction);

  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      if (matrix[y][x] === 0) continue;

      moveCell(matrix, x, y);
    }
  }

  rotateMatrixToDirection(matrix, direction);

  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      if (matrix[y][x] === 0) continue;

      matrix[y][x].y = y;
      matrix[y][x].x = x;
    }
  }

  printMatrix(matrix);

  return initCells;
};

export { moveCells, directions };
