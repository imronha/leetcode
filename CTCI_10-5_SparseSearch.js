/* 
CTCI - 10.5 Sparse Search
Given a sorted array of strings that is interspersed with empty strings, write a method to find the location of a given string.

EXAMPLE:
Input: ball, {"at", "", "", "", "ball", "", "", "car"}
Ooutput: 4 (the index of "ball")


Clarification questions:
-- 

(I) Input: array of strings and empty strings
(O) Output: index of target string
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 256

Pseudocode:
-- 
*/

// Helper function to find mid
const findMid = (front, back) => {
  const half = Math.floor((back - front) / 2);
  const mid = front + half;
  return mid;
};

// Helper function to find a mid that isnt an empty string
const nonBlankMid = (array, front, back) => {
  let mid = findMid(front, back);
  let startSearch = {
    front: front,
    back: back,
    mid: mid,
  };

  let searchQueue = [startSearch];
  let currentSearch;
  let currentFront;
  let currentMid;
  let currentBack;

  while (searchQueue.length > 0) {
    // Set to first item in search queue
    currentSearch = searchQueue.shift();
    currentFront = currentSearch.front;
    currentMid = currentSearch.mid;
    currentBack = currentSearch.back;
    if (array[currentMid] !== "") {
      // If the middle isnt an epty string, return
      return currentMid;
    } else {
      // If it is am empty string check

      if (currentFront < currentMid) {
        searchQueue.push({
          front: currentFront,
          back: currentMid,
          mid: findMid(currentFront, currentMid),
        });
      }
      if (currentMid < currentBack) {
        if (currentMid !== currentBack - 1) {
          searchQueue.push({
            front: currentMid,
            back: currentBack,
            mid: findMid(currentMid, currentBack),
          });
        }
      }
    }
  }
  return -1;
};

const sparseSearch = (target, array, front, back) => {
  if (!target || !array) {
    return undefined;
  }
  if (front === undefined && back === undefined) {
    front = 0;
    back = array.length;
    if (front === back) {
      return -1;
    }
  }

  const mid = nonBlankMid(array, front, back);
  if (mid === -1) {
    return -1;
  } else {
    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      return sparseSearch(target, array, front, mid);
    } else {
      return sparseSearch(target, array, mid, back);
    }
  }
};

console.log(
  nonBlankMid(["", "", "", "", "", "", "", "", "", "", "", ""], 0, 12) === -1
);
console.log(
  nonBlankMid(["", "", "", "", "", "", "", "", "", "hello", "", ""], 0, 12) ===
    9
);
console.log(
  nonBlankMid(["", "hello", "", "", "", "", "", "", "", "", "", ""], 0, 12) ===
    1
);
console.log(
  nonBlankMid(["hello", "", "", "", "", "", "", "", "", "", "", ""], 0, 12) ===
    0
);
console.log(
  nonBlankMid(["", "", "", "", "", "", "", "", "", "", "", "hello"], 0, 12) ===
    11
);

// sparseSearch works
console.log(
  sparseSearch("ball", [
    "at",
    "",
    "",
    "",
    "ball",
    "",
    "",
    "car",
    "",
    "",
    "dad",
    "",
    "",
  ]) === 4
);
console.log(
  sparseSearch("ball", ["", "", "", "", "", "", "", "", "", ""]) === -1
);
