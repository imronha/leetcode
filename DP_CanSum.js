/*
Write a function 'canSum(targetSum, numbersArray)' that takes in a targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are non-negative.

Example:
canSum(7, [5, 3, 4, 7]) // Returns True because 3+4 = 7 and 7=7

*/

// Not optimzed recursive solution
// Time: O(n^m)
// Space: O(m)
const canSum = (targetSum, numbers) => {
  // We will be decrementing targetSum, so base case is when targetSum = 0
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }

  return false;
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
//console.log(canSum(300, [7, 14]));

// Memoized solution
// Time: O(m*n)
// Space: O(m)
const canSumMemoized = (targetSum, numbers, cache = {}) => {
  // We will be decrementing targetSum, so base case is when targetSum = 0
  if (targetSum in cache) return cache[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSumMemoized(remainder, numbers, cache) === true) {
      cache[targetSum] = true;
      return true;
    }
  }
  cache[targetSum] = false;
  return false;
};

console.log(canSumMemoized(7, [2, 3])); // true
console.log(canSumMemoized(7, [5, 3, 4, 7])); // true
console.log(canSumMemoized(7, [2, 4])); // false
console.log(canSumMemoized(8, [2, 3, 5])); // true
//console.log(canSum(300, [7, 14]));
