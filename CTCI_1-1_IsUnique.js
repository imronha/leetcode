/* 
CTCI - 1.1 Is Unique
Implement an algorithm to deternmine if a string has all unique characters. What if you cannot use additional data structures?

Clarification questions:
-- Is the string ASCII or UNICODE?

(I) Input: String
(O) Output: Boolean
(C) Constraints: No additional data structures
(E) Edge Cases: Empty String, spaces, special chars

Time Complexity: Linear O(n)
Space Complexity: Linear O(n)

Pseudocode:
-- Create dictionary to store chars
-- Iterate through string
-- If char is not in chars dict, add it
-- If char is in chars dict, return false (found duplicate)
-- Return true at the end (no duplicates found)

*/

// Solution WITH data structure
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
console.log(
  "'k'" + " is unique: " + (isUnique("k") === true),
  "''" + " is unique: " + (isUnique("") === true),
  "'cat'" + " is unique: " + (isUnique("cat") === true),
  "'sas'" + " is not unique: " + (isUnique("sas") === false),
  "'pokemon'" + " is not unique: " + (isUnique("pokemon") === false)
);
