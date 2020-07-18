// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
var longestCommonPrefix = function (strs) {
  // Check if strs array exists
  strs.length == 0 ? "" : null;

  // Set prefix to first element in strs
  var prefix = strs[0];

  // Loop through array and compare to current prefix
  for (var i = 0; i < strs.length; i++) {
    prefix = compare(prefix, strs[i]);
  }
  return prefix;
};

// Compare helper function
var compare = function (str1, str2) {
  var result = "";
  var i = 0;
  var j = 0;

  // Keep looping through both str parameters until the letters dont match
  // If letters match, append to result
  // Return result
  while (i <= str1.length - 1 && j <= str2.length - 1) {
    if (str1[i] != str2[j]) {
      break;
    }

    result += str1[i];
    i++;
    j++;
  }
  return result;
};
