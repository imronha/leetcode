/*

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

 

Example 1:


Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
Example 3:

Input: m = 7, n = 3
Output: 28
Example 4:

Input: m = 3, n = 3
Output: 6
 

Constraints:

1 <= m, n <= 100
It's guaranteed that the answer will be less than or equal to 2 * 109.

*/

// Brute force
// Time: O(2^m+n)
// Space: 0(n+m)
var uniquePaths = function (m, n) {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};

// Optimized with memoization
// Time: O(m*n)
// Space: O(m*n)
var uniquePaths = function (m, n, cache = {}) {
  const key = m + "," + n;
  // Check if args are in cache
  if (key in cache) return cache[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  cache[key] = uniquePaths(m - 1, n, cache) + uniquePaths(m, n - 1, cache);
  return cache[key];
};
