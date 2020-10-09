/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let startpoint = 0;

  // Check if nums[midpoint] > target
  let endpoint = nums.length - 1;
  while (startpoint <= endpoint) {
    //let midpoint = startpoint + endpoint >> 1
    let midpoint = Math.floor((startpoint + endpoint) / 2);
    // if the answer is on the right side
    if (nums[midpoint] <= target) {
      startpoint = midpoint + 1;
    } else {
      endpoint = midpoint - 1;
    }
  }
  return endpoint >= 0 && nums[endpoint] === target ? endpoint : -1;
};

// function search(nums, target) {
//   let l = 0;
//   let r = nums.length-1;

//   while (l <= r) {
//     let m = l+r>>1;
//     if (nums[m] <= target) {
//       l = m+1;
//     } else {
//       r = m-1;
//     }
//   }

//   return r >= 0 && nums[r] === target ? r : -1;
// }
// nums = [-1,0,3,4,5,9,12];
// Find midpoint of the array (has to be sorted)
// How do you find the midpoint of the array?
// nums.length/2 // 3

// if it is, our answer is on the right side of the array
// find the midpoint of the right side of the array
// change the startpoint to the midpoint
// endpoint stays the same
// calculate the new midpoint index

// if the answer is on the leftside
// change the endpoint to the midpoint
// startpoint stays the same
// caluclate the new midpoint index
