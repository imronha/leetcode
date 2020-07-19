// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function (s) {
  s.length == 0 ? true : false;
  var stack = [];

  for (var i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      // If any left bracket found, push left bracket to stack
      stack.push(s[i]);
      console.log(stack);
    } else if (
      s[i] == ")" &&
      stack.length != 0 &&
      stack[stack.length - 1] == "("
    ) {
      stack.pop();
    } else if (
      s[i] == "]" &&
      stack.length != 0 &&
      stack[stack.length - 1] == "["
    ) {
      stack.pop();
    } else if (
      s[i] == "}" &&
      stack.length != 0 &&
      stack[stack.length - 1] == "{"
    ) {
      stack.pop();
    } else {
      return false;
    }
    // console.log(stack);
  }

  return stack.length === 0;
};
