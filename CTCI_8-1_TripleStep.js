/* 
CTCI - 8.1 Triple Step
A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways teh child can run up the stairs.


Clarification questions:
-- 

(I) Input: 
(O) Output: 
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 152
Hint # 178
Hint # 217
Hint # 237
Hint # 262
Hint # 359


Pseudocode:
-- 
*/

// ====== Doesnt work =====
// function tripleStep(step, cache = {}) {
//   var ways = 0;
//   if (step == 0) {
//     ways++;
//     return 0;
//   }
//   if (cache[step] === undefined) {
//     cache[step] =
//       tripleStep(step - 1, cache) +
//       tripleStep(step - 2, cache) +
//       tripleStep(step - 3, cache);
//   }

//   return ways;
// }

function countWays(n, cache = {}) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else if (cache > -1) {
    return cache[n];
  } else {
    cache[n] =
      countWays(n - 1, cache) +
      countWays(n - 2, cache) +
      countWays(n - 3, cache);
  }

  return cache[n];
}

countWays(10);
