/*

CTCI - 1.6 String Compression
Implement a method to perform basic string compression using the counts of repeated characters. 
For example, the string aabcccccaaa would become a2b1c5a3. 
If the "compressed" string would not become smaller than the original string, 
your method should return the original string. You can assume the string 
has only uppercase and lowercase letters (a - z). 

Clarification Questions:
-- Inputs and outputs?
-- IS the string sorted?
-- Expected size of input?
-- Constraints? Time and space?

EXAMPLE:
-- aabcccccaaa; a2b1c5a3. 
-- aa; aa


(I) Input: String1 
(O) Output: Compressed string or original
(C) Constraints: Optimize
(E) Edge Cases: Empty String, compressed string is the same length

Time Complexity: 
Space Complexity: 

Pseudocode:
-- Iterate through the string
-- Keep track of current char
-- If next char is the same as current char, increase count
-- IF next char is different, add the char and current count to output str

*/

let stringCompression = (str) => {
  if (str.length == 0) {
    return str;
  }
  var output = "";
  var currentCount = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      currentCount++;
    } else if (str[i] !== str[i + 1]) {
      output += str[i];
      output += currentCount.toString();
      currentCount = 1;
    }
  }
  //   console.log(output);
  if (output.length == str.length) {
    return str;
  } else {
    return output;
  }
};

console.log(
  stringCompression("aabcccccaaa") === "a2b1c5a3",
  stringCompression("aa") === "aa",
  stringCompression("aaAAaa") === "aaAAaa",
  stringCompression("aaaAAaa") === "a3A2a2",
  stringCompression("") === ""
);
