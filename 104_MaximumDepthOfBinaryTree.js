/*

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
Example 3:

Input: root = []
Output: 0
Example 4:

Input: root = [0]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100

*/

var maxDepth = function (root) {
  if (!root) return 0;
  let levels = 0,
    queue = [root];

  while (queue.length > 0) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    levels++;
  }
  return levels;
};
