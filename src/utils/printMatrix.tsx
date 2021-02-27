import { cellsType } from '../types';

type ArrayType = Array<cellsType | number>;
type MatrixType = ArrayType[];

export default function printMatrix(matrix: MatrixType): void {
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
