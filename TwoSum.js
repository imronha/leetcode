// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

var twoSum = function (nums, target) {
  var indices = [];
  for (var i = 0; i < nums.length; i++) {
    // console.log(i);
    for (var j = 1; j < nums.length; j++) {
      //console.log(i, j);
      if (nums[i] + nums[j + i] == target) {
        // console.log(nums[i], nums[j+i])
        indices.push(i);
        indices.push(j + i);
        return indices;
      }
    }
  }
};

//twoSum([3,2,4], 6);
