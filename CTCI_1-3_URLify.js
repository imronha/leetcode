/* 
CTCI - 1.3 URLify
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: if implementing in JAVA, please use a character array so that you can perform this operation in place.)

Clarification questions:
-- 

Example: 
-- Input: "Mr John Smith   ", 13
-- Output: "My%20John%20Smith"

(I) Input: String, Integer
(O) Output: String
(C) Constraints: Optimize
(E) Edge Cases: Empty String, spaces in front / middle / end

Time Complexity: 
Space Complexity: 

Pseudocode:
-- Create output string, character count, and space count
-- First iteration - count non-space chars
-- Second iteration - if char == ' ', concat '%20' to output, else concat the char
-- Check for extra spaces (if num arg > space) and add '%20' to the end of outputstr
*/

let URLify = (str, len = str.length) => {
  let outputStr = "";
  let charCount = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== " ") {
      charCount++;
    }
  }

  let spaceCount = len - charCount;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === " " && spaceCount > 0) {
      outputStr += "%20";
      spaceCount--;
    } else if (char !== " ") {
      outputStr += char;
    }
  }
  //if n is not yet reached and there are still spaceCount left
  while (spaceCount > 0) {
    outputStr += "%20";
    spaceCount--;
  }

  return outputStr;
};

// Test Cases
console.log(
  URLify("Mr John Smith ", 13) === "Mr%20John%20Smith",
  URLify("Mr John Smith ", 14) === "Mr%20John%20Smith%20",
  URLify("   hi", 7) === "%20%20%20hi%20%20",
  URLify("   hi ", 3) === "%20hi",
  URLify("", 0) === "",
  URLify("", 2) === "%20%20",
  URLify("hel lo", 5) === "hello"
);
