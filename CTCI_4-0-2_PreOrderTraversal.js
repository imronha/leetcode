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

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

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
