/*

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701


*/

var titleToNumber = function (s) {
  let colNumber = 0;

  for (let i = 0; i < s.length; i++) {
    // Char code for A is 65, B is 66, etc so subtract 64
    const ascii = s.charCodeAt(i) - 64;
    // console.log(s.charCodeAt(i))
    colNumber = colNumber * 26 + ascii;
  }

  return colNumber;
};
