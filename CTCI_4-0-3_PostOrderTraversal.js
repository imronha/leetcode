/*
Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:
        2
       / \
      /   \
     /     \
    1       3
Input: root = [1,null,2,3]
Output: [3,2,1]

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
Output: [2,1]

Example 5:
        1
         \
          \
           \
            2
Input: root = [1,null,2]
Output: [2,1]
 
Constraints:
The number of the nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

Follow up:
Recursive solution is trivial, could you do it iteratively?

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function preOrderTraversal(root) {
  // If the root is null, return empty array
  if (root == null) {
    return [];
  }

  const stack = [];
  const result = [];

  stack.push(root);

  // Keep iterating as long as there are still items in stack
  while (stack.length > 0) {
    let current = stack.pop();
    result.push(current.data);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return result;
}

function preOrderTraversalRecursion(root) {
  if (!root) {
    return null;
  }

  console.log(root.data);
  preOrderTraversalRecursion(root.left);
  preOrderTraversalRecursion(root.right);
}

/*
       10
       / \
      /   \
     /     \
    1       2
   / \     / \
  3   4   5   6

*/
let tree = new TreeNode(10);
let node1 = new TreeNode(1);
let node2 = new TreeNode(2);

tree.left = node1;
tree.right = node2;

let node3 = new TreeNode(3);
let node4 = new TreeNode(4);

node1.left = node3;
node1.right = node4;

let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

node2.left = node5;
node2.right = node6;

console.log("preOrderTraversal", preOrderTraversal(tree));
console.log("preOrderTraversalRecursion", preOrderTraversalRecursion(tree));

// Returns [10, 1, 3, 4, 2, 5, 6]
