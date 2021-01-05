/*

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]


- declare an array of size(numbers)
- generate row by row (each row is a new array)
- row[0] = 1
- row[row.length-1] = 1
- look at previous row to determine current row
- rowAbove = pascalsTriangle[i-1]
- add rowAbove[j] + rowAbove[j-1]
- final output is a nested array


*/


var generate = function(numRows) {
    let pascalsTriangle = new Array(numRows);

     for (let i = 0; i < numRows; i++) {
          let row = new Array(i+1);
          row[0] = 1;
          row[row.length - 1] = 1;
          for (let j = 1; j < row.length-1; j++) {
               let rowAbove = pascalsTriangle[i-1];
               row[j] = rowAbove[j] + rowAbove[j-1]
          }
          pascalsTriangle[i] = row;
     }

     return pascalsTriangle;
};