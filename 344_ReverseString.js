/*

Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.

 

Example 1:

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

var reverseString = function (s) {
  return s.reverse();
};

/*
Two pointer approach:

Declare two pointers, left and right. 
Then iterate over the array, one pointer looking at the front of the array, another looking at the rear. As long as left is smaller than right, swap elements in place. When pointers meet or cross, you're done.

Time complexity: O(n)
Space complexity: O(n). 

*/

var reverseString = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    ++left;
    --right;
  }
};
