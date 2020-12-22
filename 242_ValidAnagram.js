/*

Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?

*/

/*
Runtime: 120 ms, faster than 18.00% of JavaScript online submissions for Valid Anagram.
Memory Usage: 46.1 MB, less than 5.37% of JavaScript online submissions for Valid Anagram.
*/

var isAnagram = function (s, t) {
  var sArray = [];
  var tArray = [];
  for (let i = 0; i < s.length; i++) {
    sArray.push(s[i]);
  }
  for (let i = 0; i < t.length; i++) {
    tArray.push(t[i]);
  }
  // console.log(sArray.sort(), tArray.sort())
  if (sArray.sort().join() === tArray.sort().join()) {
    return true;
  }
  return false;
};
