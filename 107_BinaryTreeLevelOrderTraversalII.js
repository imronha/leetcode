/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
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

var bottomUpLevel = function (root) {
  if (root === null) {
    return [];
  }
  let result = [];
  let queue = [root];
  while (queue.length > 0) {
    let size = queue.length;
    let current = [];
    for (let i = 0; i < size; i++) {
      let head = queue.shift();
      current.push(head.val);
      if (head.left !== null) {
        queue.push(head.left);
      }
      if (head.right !== null) {
        queue.push(head.right);
      }
    }
    result.unshift(current);
  }
  return result;
};

/*
            3
           / \
          /   \
         /     \
        9       20
               / \
              15  7
    
    */
let tree = new TreeNode(3);
let node1 = new TreeNode(9);
let node2 = new TreeNode(20);

tree.left = node1;
tree.right = node2;

let node3 = new TreeNode(15);
let node4 = new TreeNode(7);

node2.left = node3;
node2.right = node4;

console.log("postOrderTraversal", postorderTraversal(tree));
/* 
[
  [15,7],
  [9,20],
  [3]
]
*/
