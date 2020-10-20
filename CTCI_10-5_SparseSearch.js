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

const sparseSearch = (target, array, front, back) => {
  front = 0;
  back = array.length - 1;
  var left = 0;
  var right = 0;

  while (front <= back) {
    // Get the current mid
    var mid = Math.floor(front + (back - front) / 2);
    if (array[mid] == "") {
      left = mid - 1;
      right = mid + 1;

      while (true) {
        if (left < front && right > back) {
          return -1;
        } else if (left >= front && array[left] !== "") {
          // Search left
          mid = left;
          break;
        } else if (right <= back && array[right] !== "") {
          // Search right
          mid = right;
          break;
        }
        left--;
        right++;
      }
    }

    // If target is found
    if (array[mid] == target) {
      return mid;
    } else if (array[mid] > target) {
      back = mid - 1;
    } else if (array[mid] < target) {
      front = mid + 1;
    }
  }
  return -1;
};
// Recursive solution
// Helper function to find mid
// const findMid = (front, back) => {
//   const half = Math.floor((back - front) / 2);
//   const mid = front + half;
//   return mid;
// };

// // Helper function to find a mid that isnt an empty string
// const nonBlankMid = (array, front, back) => {
//   let mid = findMid(front, back);
//   let startSearch = {
//     front: front,
//     back: back,
//     mid: mid,
//   };

//   let searchQueue = [startSearch];
//   let currentSearch;
//   let currentFront;
//   let currentMid;
//   let currentBack;

//   while (searchQueue.length > 0) {
//     // Set to first item in search queue
//     currentSearch = searchQueue.shift();
//     currentFront = currentSearch.front;
//     currentMid = currentSearch.mid;
//     currentBack = currentSearch.back;
//     if (array[currentMid] !== "") {
//       // If the middle isnt an epty string, return
//       return currentMid;
//     } else {
//       // If it is am empty string check

//       if (currentFront < currentMid) {
//         searchQueue.push({
//           front: currentFront,
//           back: currentMid,
//           mid: findMid(currentFront, currentMid),
//         });
//       }
//       if (currentMid < currentBack) {
//         if (currentMid !== currentBack - 1) {
//           searchQueue.push({
//             front: currentMid,
//             back: currentBack,
//             mid: findMid(currentMid, currentBack),
//           });
//         }
//       }
//     }
//   }
//   return -1;
// };

// const sparseSearch = (target, array, front, back) => {
//   if (!target || !array) {
//     return undefined;
//   }
//   if (front === undefined && back === undefined) {
//     front = 0;
//     back = array.length;
//     if (front === back) {
//       return -1;
//     }
//   }

//   // Find nonblank using breadth first search
//   const mid = nonBlankMid(array, front, back);
//   if (mid === -1) {
//     return -1;
//   } else {
//     if (target === array[mid]) {
//       return mid;
//     } else if (target < array[mid]) {
//       return sparseSearch(target, array, front, mid);
//     } else {
//       return sparseSearch(target, array, mid, back);
//     }
//   }
// };

// Tests
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

console.log(
  sparseSearch("geeks", [
    "for",
    "geeks",
    "",
    "",
    "",
    "",
    "ide",
    "practice",
    "",
    "",
    "",
    "quiz",
  ]) === 1
);
