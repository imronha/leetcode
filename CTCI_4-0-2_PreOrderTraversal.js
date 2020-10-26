/* 

4.02 Pre-order Traversal

https://www.tutorialspoint.com/Pre-order-traversal-in-a-Javascript-Tree

        A
       / \
      /   \
     /     \
    B       C
   / \     / \
  D   E   F   G

-- Pre-order traversal
Root node is visited first, then left subtree and then right subtree. (top to bottom, left to right)

-- Our example will return [A, B, D, E, C, F, G]

Pseudocode
- Create an empty stack [];
- Do while stack is not empty:
- Pop an item from stack and add it to the 'result' array.
- Push 'right child' of popped item to stack.
- Push 'left child' of popped item to stack.


*/

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

var preorderTraversal = function (root) {
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
    result.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
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

console.log("preOrderTraversal", preorderTraversal(tree));
// Returns [10, 1, 3, 4, 2, 5, 6]
