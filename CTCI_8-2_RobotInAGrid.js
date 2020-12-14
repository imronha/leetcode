/* 
CTCI - 8.2 Robot in a Grid 
Imagine a robot sitting on the upper left corner of grid with r rows and c columns. The robot can only move in two directions, right and down, but certain cells are 'off limits' such that the robot cannot step on them. Design an algorithm to find a path for the robot from the top left to the bottom right.


Clarification questions:
-- 

(I) Input: 
(O) Output: 
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 331
Hint # 360
Hint # 388



Pseudocode:
-- 
*/

const robotInGrid = (m, n, cache = {}) => {
  const key = m + "," + n;
  if (key in cache) return cache[key];
  // return 1 if we reach the bottom right
  if (m === 1 && n === 1) return 1;
  // return 0 if theres ever a 0 col or row
  if (m === 0 || n === 0) return 0;
  cache[key] = robotInGrid(m - 1, n, cache) + robotInGrid(m, n - 1, cache);

  return cache[key];
};
