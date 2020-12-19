/*

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Example 3:

Input: matrix = [[1]]
Output: [[1]]
Example 4:

Input: matrix = [[1,2],[3,4]]
Output: [[3,1],[4,2]]

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let len = matrix.length;

  for (let row = 0; row < Math.floor(len / 2); row++) {
    for (let col = 0; col < len - 2 * row - 1; col++) {
      let t = matrix[row + col][len - 1 - row];
      matrix[row + col][len - 1 - row] = matrix[row][row + col];
      matrix[row][row + col] = t;

      t = matrix[len - 1 - row][len - 1 - row - col];
      matrix[len - 1 - row][len - 1 - row - col] = matrix[row][row + col];
      matrix[row][row + col] = t;

      t = matrix[len - 1 - row - col][row];
      matrix[len - 1 - row - col][row] = matrix[row][row + col];
      matrix[row][row + col] = t;
    }
  }
  return matrix;
};

let rotateMatrix = (m) => {
  let n = m.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n - 2 * i - 1; j++) {
      let t = m[i + j][n - 1 - i];
      m[i + j][n - 1 - i] = m[i][i + j];
      m[i][i + j] = t;

      t = m[n - 1 - i][n - 1 - i - j];
      m[n - 1 - i][n - 1 - i - j] = m[i][i + j];
      m[i][i + j] = t;

      t = m[n - 1 - i - j][i];
      m[n - 1 - i - j][i] = m[i][i + j];
      m[i][i + j] = t;
    }
  }
  return m;
};
