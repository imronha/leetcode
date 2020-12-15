/* 
CTCI - 4.5 Validate BST
Implement a function to check if a binary tree is a binary search tree.


Clarification questions:
-- What is a binary search tree?

(I) Input: 
(O) Output: 
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 35
Hint # 57
Hint # 86
Hint # 113
Hint # 128

Pseudocode:
-- 
*/

function validateBST_1(node) {
  if (!node) return true;

  if (node.parent) {
    if (node.parent.left === node) {
      if (node.value > node.parent.value) return false;
    } else if (node.parent.right === node) {
      if (node.value <= node.parent.value) return false;
    }
  }

  return validateBST_1(node.left) && validateBST_1(node.right);
}
