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

Time Complexity: Linear O(2n) - looping through two strings
Space Complexity: Linear O(n)

Pseudocode:
-- If strings are not same length, return false
-- Iterate through one string
-- Add chars to dict, assign value 1 or +1 if already exists
-- Iterate through second string
-- If chars dict has str2 char and !=0, -1
*/

let isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  var chars = {};

  for (var i = 0; i < str1.length; i++) {
    var char = str1[i];
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }

  for (var j = 0; j < str2.length; j++) {
    if (chars[str2[j]] && chars[str2[j]] !== 0) {
      chars[str2[j]]--;
    } else {
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
  "\n",
  (isPermutation("baaab", "bbbaa") === false) +
    ": " +
    "'baaab'" +
    "and" +
    "'bbbaa'" +
    " are not permutations.",
  "\n"
);
