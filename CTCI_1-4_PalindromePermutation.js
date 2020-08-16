/*

CTCI - 1.4 Palindrome Permutation
Given a string, write a function to check if it is a permutation of a palindrome.  
A palindrome is a word or phrase that is the same forwards and backwards.  
A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

Clarification Questions:
-- 

EXAMPLE:
-- Input: Tact Coa
-- Output: True (permutations: "taco cat", "atco cat", etc.)

(I) Input: String
(O) Output: Boolean
(C) Constraints: Optimize
(E) Edge Cases: Empty String, spaces in front / middle / end

Time Complexity: 
Space Complexity: 

Pseudocode:
-- Check length of str 
-- Create dict to store chars and counts
-- Check dict depending on length of str (odd = only 1 odd # char, even = even # char only)
*/

let palindromPermutation = (str) => {
  var chars = {};
  var even = false;

  var strLen = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      strLen++;
    }
  }

  if (strLen % 2 == 0) {
    even = true;
    // console.log("String is even");
  } else {
    // console.log("String is odd");
  }

  for (let i = 0; i < str.length; i++) {
    var char = str[i];
    if (char == " ") {
      continue;
    }
    if (!chars[char] && chars[char] != " ") {
      chars[char] = 1;
    } else if (chars[char] && chars[char] != " ") {
      chars[char]++;
    }
  }
  for (var num in chars) {
    if (even) {
      if (chars[num] % 2 != 0) {
        return false;
      }
    }
    return true;
    // console.log(num, chars[num]);
  }
  //   console.log(chars);
};

console.log(
  palindromPermutation("taco cat") === true,
  palindromPermutation("atco cat") === true,
  palindromPermutation(" rac  ecar rara ") === true,
  palindromPermutation("chirpingmermaid") === false, //failing
  palindromPermutation("aabbc") === true,
  palindromPermutation("aaaabbbbcc") === true,
  palindromPermutation("aabc") === false, //failing
  palindromPermutation("") === true //failing
);
