/*

CTCI - 1.5 One Away
There are three types of edits that can be performed on strings: 
- insert a character,
- remove a character, 
- or replace a character. 
Given two strings, write a function to check if they are
one edit (or zero edits) away.

Clarification Questions:
-- Inputs and outputs?
-- Expected size of input?
-- Constraints? Time and space?

EXAMPLE:
-- pale, ple; true
-- pales, pale; true
-- pale, bale; true
-- pale, bake; false

(I) Input: String1, String2
(O) Output: Boolean
(C) Constraints: Optimize
(E) Edge Cases: Empty String

Time Complexity: 
Space Complexity: 

Pseudocode:
-- If inserted, str1's current char should equal str2's next char
-- If removed, str1's next char should equal str2's current char
-- If replaced, str1's next char should equal str2's next char
-- Keep track of how many edits
-- If the difference in lengths > max edits, return false
-- Iterate through strings checking for diffs
-- Store max length
-- Decrement # edits if diff found, return false if <0
-- Return true when loop is done

*/

let oneAway = (str1, str2) => {
  var edits = 1;
  var maxLength = Math.max(str1.length, str2.length);
  var diff = Math.abs(str1.length - str2.length);

  if (diff > edits) {
    return false;
  }

  for (let i = 0, j = 0; i < maxLength || j < maxLength; i++, j++) {
    let char1 = str1[i];
    let char2 = str2[j];
    if (char1 !== char2) {
      edits--;
      if (edits < 0) {
        return false;
      }
      if (char1 === str2[j + 1]) {
        j++;
      } else if (str1[i + 1] === char2) {
        i++;
      }
    }
  }
  return true;
};

console.log(
  oneAway("pale", "ple") === true, //removed
  oneAway("pales", "pale") === true, //inserted
  oneAway("pale", "bale") === true, //replaced
  oneAway("pale", "bake") === false,
  oneAway("p", "") === true,
  oneAway("", "bake") === false,
  oneAway("pr", "r") === true,
  oneAway("pr", "rp") === false,
  oneAway("brrr", "brrss") === false,
  oneAway("abc", "acs") === false,
  oneAway("aple", "aple") === true
);
