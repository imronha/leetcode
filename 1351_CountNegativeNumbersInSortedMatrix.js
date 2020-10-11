// Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise.

// Return the number of negative numbers in grid.

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0
// Example 3:

// Input: grid = [[1,-1],[-1,-1]]
// Output: 3
// Example 4:

// Input: grid = [[-1]]
// Output: 1

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100

// Brute force solution
// I: m x n matrix
// O: integer
// C: m == grid.length, n = grid[i].length
// E:
// Time Complexity: O(n)^2 - double for loop
// Space Complexity: O(n)
// var countNegatives = function (grid) {
//   let negativeCount = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] < 0) {
//         negativeCount++;
//       }
//     }
//   }

//   return negativeCount;
// };

// Optimized solution with binary search
// I: m x n matrix
// O: integer
// C: m == grid.length, n = grid[i].length
// E:
var countNegatives = function (grid) {
  let negativeCount = 0;
  for (let row of grid) {
    const index = binarySearch(row);
    if (index > -1) {
      negativeCount += row.length - index;
    }
  }

  return negativeCount;
};
var binarySearch = function (nums) {
  let startpoint = 0;
  let endpoint = nums.length - 1;
  let result = -1;
  while (startpoint <= endpoint) {
    let midpoint = Math.floor((startpoint + endpoint) / 2);
    if (nums[midpoint] < 0) {
      result = midpoint;
      endpoint = midpoint - 1;
    } else {
      startpoint = midpoint + 1;
    }
  }
  return result;
};
