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
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var postorderTraversal = function (root) {
  if (!root) return [];

  var result = [];
  var stack = [root];

  while (stack.length) {
    var currentNode = stack.pop();
    // insert the node val to the front
    result.unshift(currentNode.val);

    if (currentNode.left) stack.push(currentNode.left); // left first
    if (currentNode.right) stack.push(currentNode.right); // then right
  }

  return result;
};

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

console.log("postOrderTraversal", postorderTraversal(tree));
// Returns [3, 4, 1, 5, 6, 2, 10]
