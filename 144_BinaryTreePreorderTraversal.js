/* 

Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:
        2
       / \
      /   \
     /     \
    1       3
Input: root = [1,null,2,3]
Output: [1,2,3]


Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
Output: [1]

Example 4:
        1
       / 
      /   
     /     
    2       
Input: root = [1,2]
Output: [1,2]

Example 5:
        1
         \
          \
           \
            2
Input: root = [1,null,2]
Output: [1,2]
 

Constraints:
-- The number of nodes in the tree is in the range [0, 100].
-- -100 <= Node.val <= 100
 

Follow up:
-- Recursive solution is trivial, could you do it iteratively?

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 
 */
var preorderTraversal = function (root) {
  if (root == null) {
    return [];
  }

  const stack = [];
  const result = [];

  stack.push(root);

  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
};
