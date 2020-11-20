/* 
CTCI - 4.2 Minimal Tree
Given a sorted (increasing order) array with unqiue integer elements, write an algorithm to create a binary search tree with minimal height.


Clarification questions:
-- What does minimal height mean?

(I) Input: 
(O) Output: 
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 19
Hint # 73
Hint # 116

Pseudocode:
-- 
*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function minimalTree(arr, start = 0, end = arr.length - 1) {
  if (start > end) {
    return null;
  }

  const middle = Math.floor((end + start) / 2);

  const node = new Node(arr[middle]);

  node.left = minimalTree(arr, start, middle - 1);
  node.right = minimalTree(arr, middle + 1, end);

  return node;
}

console.log(minimalTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
