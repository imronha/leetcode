/* 
CTCI - 10.2 Group Anagrams
Write a method to sort an array of strings so that all the anagrams are next to each other.

Clarification questions:
-- 

(I) Input: 
(O) Output: 
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 177
Hint # 182
Hint # 263
Hint # 342


Pseudocode:
-- Create hash to hold anagrams. Ex: hash { sortedChars: [strings]}
-- Iterate through the string array using for.Each
-- split each string, sort the chars
-- check if sorted chars are in hash
-- if in hash, push string
-- if not, set sortedChars = [string]
*/

var groupAnagrams = (strArr) => {
  let hash = {};
  strArr.forEach((str) => {
    // Get the chars of each string in array and sort them
    let chars = str.split("").sort();

    // Check if chars are in the hash already, if yes push str to hash and if not
    hash[chars] ? hash[chars].push(str) : (hash[chars] = [str]);

    // Hash now has sortedChars : [string(s)]
    // Get keys from hash (the sorted chars)
    // Get values from hash using the keys
    // const values = Object.values(hash);
  });
  const keys = Object.keys(hash);
  const values = keys.map(function (val) {
    return hash[val];
  });

  return values.sort();

  // if (strArr === undefined) {
  //     return 'where is your anagram?';
  //    } else {
  //      let mapStrArr = strArr.map((string) => {
  //        return {
  //          original: string,
  //          sorted: string.split('').sort().join('')
  //        };
  //      });

  //      mapStrArr.sort((a, b) => {
  //        return a.sorted < b.sorted ? 1 : -1;
  //      });

  //      const answer = mapStrArr.map((mapStr) => {
  //        return mapStr.original;
  //      });

  //      return answer;
  //    }

  //   let mapArr = arr.map((string) => {
  //     return {
  //       originalStr: string,
  //       sortedStr: string.split("").sort().join(""),
  //     };
  //   });
  //   mapArr.sort((a, b) => {
  //     return a.sortedStr < b.sortedStr ? 1 : -1;
  //   });

  //   const answer = mapArr.map((mappedStr) => {
  //     return mappedStr.originalStr;
  //   });

  //   return answer;
};

// const anagrams = [
//   "motherinlaw",
//   "debit card",
//   "dormitory",
//   "theearthquakes",
//   "astronomer",
//   "punishments",
//   "schoolmaster",
//   "hitlerwoman",
//   "badcredit",
//   "dirtyroom",
//   "thequeershakes",
//   "moonstarrer",
//   "ninethumps",
//   "theclassroom",
// ];

// const anagramsSorted = [
//   "ninethumps",
//   "punishments",
//   "dormitory",
//   "dirtyroom",
//   "astronomer",
//   "moonstarrer",
//   "motherinlaw",
//   "hitlerwoman",
//   "thequeershakes",
//   "schoolmaster",
//   "theclassroom",
//   "badcredit",
//   "theearthquakes",
//   "debit card",
// ];

// // groupAnagrams can be sorted
// console.log(
//   JSON.stringify(groupAnagrams(anagrams)) === JSON.stringify(anagramsSorted)
// );
