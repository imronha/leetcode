/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.

*/

/*

Runtime: 384 ms, faster than 9.96% of JavaScript online submissions for Single Number.
Memory Usage: 50.8 MB, less than 5.18% of JavaScript online submissions for Single Number.

*/

var singleNumber = function (nums) {
  var dict = {};
  for (let i = 0; i < nums.length; i++) {
    if (dict[nums[i]]) {
      dict[nums[i]]++;
    } else {
      dict[nums[i]] = 1;
    }
  }
  console.log(dict);
  for (var key in dict) {
    console.log(key);
    if (dict[key] === 1) {
      return key;
    }
  }
};
