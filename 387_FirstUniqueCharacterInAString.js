/*

Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 

Note: You may assume the string contains only lowercase English letters.

*/

var firstUniqChar = function(s) {
    let letters = {};
    for (let i = 0; i < s.length; i++) {
        if (letters[s[i]]) {
            letters[s[i]]++
        } else {
            letters[s[i]] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (letters[s[i]] == 1) {
            return i;
        }
    }

    return -1;
    
};