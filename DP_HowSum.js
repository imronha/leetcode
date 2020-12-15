/*

Write a function 'howSum(targetSum, numbers)' that takes ina targetSum and an array of numbers as arguments.

The function should return an array ocntaining any combination of elements that adds up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.

If there are multiple combinations possible, you may return any single one.


Example:
howSum(7, [5, 3, 4, 7]) --> [3, 4] or [7]
howSum(8, [2, 3, 5]) --> [2, 2, 2, 2] or [3, 5]
howSum(7, [2, 4]) --> null
howSum(0, [1, 2, 3]) --> []

*/

// Not optimized
// m = targetSum, n = numbers.length
// Time: O(n^m * m)
// Same time completxity as canSum, but need to consider the [...result, num] line (*m)
// Space: O(m)
const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers);
    if (result !== null) {
      return [...result, num];
    }
  }

  return null;
};

console.log("howSum test cases");
console.log(howSum(7, [5, 3, 4, 7])); // [3, 4] or [7]
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2] or [3, 5]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(0, [1, 2, 3])); // []

// Memoized
// Time: O(n*m^2)
// Space: O(m^2)
const howSumMemoized = (targetSum, numbers, cache = {}) => {
  if (targetSum in cache) return cache[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSumMemoized(remainder, numbers, cache);
    if (result !== null) {
      cache[targetSum] = [...result, num];
      return cache[targetSum];
    }
  }
  cache[targetSum] = null;
  return null;
};

console.log("howSumMemoized test cases");
console.log(howSumMemoized(7, [5, 3, 4, 7])); // [3, 4] or [7]
console.log(howSumMemoized(8, [2, 3, 5])); // [2, 2, 2, 2] or [3, 5]
console.log(howSumMemoized(7, [2, 4])); // null
console.log(howSumMemoized(0, [1, 2, 3])); // []
console.log(howSumMemoized(300, [7, 14])); // null
