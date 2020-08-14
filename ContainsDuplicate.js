// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */

//Brute force, does 13/18 test cases pass
// var containsDuplicate = function (nums) {
//   for (var i = 0; i < nums.length; i++) {
//     for (var j = 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

var containsDuplicate = function (nums) {
  // Sort array
  // Interate through array, checking the current num and current+1 num
  nums.sort();
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      return true;
    }
  }
  return false;
};
