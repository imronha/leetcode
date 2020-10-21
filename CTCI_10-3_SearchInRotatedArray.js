/* 
CTCI - 10.3 Search in Rotated Array
Given a sorted array of n integers that has been rotated an unkown number of times, write code to find an element in the array. You may assume that the array was originally sorted in increasing order.

EXAMPLE
Input: Find 5 in [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14]
Output: 8 (the index of 5 in the array)

Clarification questions:
-- What does rotated mean?
-- How can we find the start, end, and mid if the array is rotated?

(I) Input: Rotated array, search value
(O) Output: 
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 298
Hint # 310

Pseudocode:
-- Find the start, mid, and end of array

/////////////////////
Original sorted array
[1, 2, 3, 4, 5, 6, 7]

After rotation, it might be something like
[3, 4, 5, 6, 7, 1, 2]
[6, 7, 1, 2, 3, 4, 5]
[1, 2, 3, 4, 5, 6, 7] <-- rotated and end up the same
and etc..

When you divide the rotated array into two halves, using mid index, at least one of subarray should remain sorted ALWAYS.

[3, 4, 5, 6, 7, 1, 2]
-> [3, 4, 5] [ 6, 7, 1, 2]
the left side remains sorted

[6, 7, 1, 2, 3, 4, 5]
-> [6, 7, 1] [2, 3, 4, 5]
the right side remains sorted

[1, 2, 3, 4, 5, 6, 7]
-> [1, 2, 3] [4, 5, 6, 7]
Both sides remain sorted.
*/

var searchInRotatedArray = (nums, target) => {
  // Set the left and right variables
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // If the target is the mid, return mid
    if (nums[mid] === target) {
      return mid;
    }

    // Check if left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        // Check if target is in the left side
        right = mid - 1;
      } else {
        // Target is in the right
        left = mid + 1;
      }
    } else {
      // Right side is sorted
      // Check if target is on the right
      if (nums[mid] <= target && target <= nums[right]) {
        // Target is on the right
        left = mid + 1;
      } else {
        // Target is on the left
        right = mid - 1;
      }
    }
  }
  return -1;
};

console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 0) === 4);
console.log(searchInRotatedArray([4, 5, 6, 7, 0, 1, 2], 3) === -1);
