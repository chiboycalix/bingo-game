
/**
 *
 * rows
 *
 */
const rowOneWins = [0, 1, 2, 3, 4];
const rowTwoWins = [5, 6, 7, 8, 9];
const rowThreeWins = [10, 11, 12, 13, 14];
const rowFourWins = [15, 16, 17, 18, 19];
const rowFiveWins = [20, 21, 22, 23, 24];

/**
 *
 * Columns
 *
 */
const columnOneWins = [0, 5, 10, 15, 20];
const columnTwoWins = [1, 6, 11, 16, 21];
const columnThreeWins = [2, 7, 12, 17, 22];
const columnFourWins = [3, 8, 13, 18, 23];
const columnFiveWins = [4, 9, 14, 19, 24];

/**
 *
 * Diagonal
 *
 */
const diagonalOne = [0, 6, 12, 18, 24];
const diagonalTwo = [4, 8, 12, 16, 20];

export const winOptions = [
  rowOneWins,
  rowTwoWins,
  rowThreeWins,
  rowFourWins,
  rowFiveWins,
  columnOneWins,
  columnTwoWins,
  columnThreeWins,
  columnFourWins,
  columnFiveWins,
  diagonalOne,
  diagonalTwo,
];

