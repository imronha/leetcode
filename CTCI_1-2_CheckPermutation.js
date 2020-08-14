/* 
CTCI - 1.2 Check Permutations
Given two strings, write a method to decide if one is a permutation of the other.

Clarification questions:
-- Is the comparison case sensitive? ie. Is "God" a permutation of "dog"?
-- Is whitespace significant? ie. Is "  dog" a permutation of "dog"?

(I) Input: Two strings
(O) Output: Boolean
(C) Constraints: Optimize
(E) Edge Cases: Empty String, spaces, special chars, case sensitive

Time Complexity: 
Space Complexity: 

Pseudocode:
-- If strings are not same length, return false
-- Iterate through one string
-- Add chars to dict, assign true
-- Iterate through second string
-- If chars dict does not have str2 char, return false

*/

let isPermutation = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }
  var chars = {};

  for (var i = 0; i < str1.length; i++) {
    chars[str1[i]] = true;
  }

  for (var j = 0; j < str2.length; j++) {
    if (!chars[str2[j]]) {
      return false;
    }
  }

  return true;
};

// Test Cases
console.log(
  "\n",
  (isPermutation("", "") === true) +
    ": " +
    "''" +
    "and" +
    "''" +
    " are permutations.",
  "\n",
  (isPermutation("ki", "ik") === true) +
    ": " +
    "'ki'" +
    "and" +
    "'ik'" +
    " are permutations.",
  "\n",
  (isPermutation("cat", "car") === false) +
    ": " +
    "'cat'" +
    "and" +
    "'car'" +
    " are not permutations.",
  "\n",
  (isPermutation("sas", "sassy") === false) +
    ": " +
    "'sas'" +
    "and" +
    "'sassy'" +
    " are not permutations.",
  "\n",
  (isPermutation("rast", "star") === true) +
    ": " +
    "'rast'" +
    "and" +
    "'star'" +
    " are permutations.",
  "\n"
);
