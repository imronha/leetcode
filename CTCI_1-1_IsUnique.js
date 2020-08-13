/* 
CTCI - 1.1 Is Unique
Implement an algorithm to deternmine if a string has all unique characters. What if you cannot use additional data structures?

Clarification questions:
-- Is the string ASCII or UNICODE?

Input: String
Output: Boolean
Constraints: No additional data structures
Edge Cases: Empty String, spaces, special chars

Time Complexity:
Space Complexity:

Pseudocode:
-- Create dictionary to store chars
-- Iterate through string
-- If char is not in chars dict, add it
-- If char is in chars dict, return false (found duplicate)
-- Return true at the end (no duplicates found)

*/

let isUnique = (str) => {
  let chars = {};
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (chars[char]) {
      return false;
    } else {
      chars[char] = true;
    }
  }
  return true;
};

// Test Cases
console.log("'k'" + " is unique: " + (isUnique("k") === true));
console.log("''" + " is unique: " + (isUnique("") === true));
console.log("'cat'" + " is unique: " + (isUnique("cat") === true));
console.log("'sas'" + " is not unique: " + (isUnique("sas") === false));
console.log("'pokemon'" + " is not unique: " + (isUnique("pokemon") === false));
