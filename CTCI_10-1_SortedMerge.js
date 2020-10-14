/* 
CTCI - 10.1 Sorted Merge
You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order

Clarification questions:
-- 

(I) Input: Two sorted arrays
(O) Output: One sorted array
(C) Constraints: 
(E) Edge Cases: Empty array, spaces, special chars

Time Complexity: 
Space Complexity: 

Hint # 332
Try moving from the end of the array to the beginning.

Pseudocode:
-- Create two pointers, one for each array // i, j = 0
-- Create new array 'answer' to store merged array
-- Create a loop to iterate through the arrays
-- while pointer1 < arr1.length || pointer2 < arr2.length
-- only interates 
-- At each index, compare the two values at pointers
-- if arr1[i] < arr2[j], move arr1[i] into answer array, increment pointer i
-- if arr1[i] > arr2[j], move arr2[j] into answer array, increment pointer j
-- if pointer1 == arr1.length (reached the end of arr1), push the rest of arr2 into the answer array
-- if pointer2 === arr2.length (reached the end of arr2), push the rest of arr1 into the answer array
*/

const sortedMerge = (arr1, arr2) => {
  if (!arr1 || !arr2) {
    return undefined;
  } else {
    let answer = [];
    let pointer1 = 0;
    let pointer2 = 0;

    while (pointer1 < arr1.length || pointer2 < arr2.length) {
      if (pointer1 === arr1.length) {
        answer.push(arr2[pointer2]);
        pointer2++;
      } else if (pointer2 === arr2.length) {
        answer.push(arr1[pointer1]);
        pointer1++;
      } else if (arr1[pointer1] < arr2[pointer2]) {
        answer.push(arr1[pointer1]);
        pointer1++;
      } else {
        answer.push(arr2[pointer2]);
        pointer2++;
      }
    }
    return answer;
  }
};

// Test Cases
// Should all return true
console.log(
  JSON.stringify(sortedMerge([1, 3, 22], [8, 9, 11])) ===
    JSON.stringify([1, 3, 8, 9, 11, 22])
);
console.log(
  JSON.stringify(sortedMerge([7, 8, 9], [10, 11, 12])) ===
    JSON.stringify([7, 8, 9, 10, 11, 12])
);
console.log(
  JSON.stringify(sortedMerge([1, 2, 3], [])) === JSON.stringify([1, 2, 3])
);
