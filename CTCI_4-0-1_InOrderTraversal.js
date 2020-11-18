/* 

4.01 In order Traversal

https://www.tutorialspoint.com/In-order-traversal-in-Javascript-Tree

        A
       / \
      /   \
     /     \
    B       C
   / \     / \
  D   E   F   G

-- In order traversal
Left subtree is visited first, then the root node, then right subtree

-- Our example will return [D, B, E, A, F, C, G]

Pseudocode
- 


*/

class TreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function inOrderTraversalRecursion(node) {
  if (!node) {
    return null;
  }

  inOrderTraversalRecursion(node.left);
  console.log(node.data);
  inOrderTraversalRecursion(node.right);
}

function inOrderTraversal(node) {
  if (!node) {
    return null;
  }

  const stack = [];

  while (true) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      if (stack.length === 0) {
        break;
      }
      const processNode = stack.pop();

      console.log(processNode.data);

      node = processNode.right;
    }
  }
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
let root = new TreeNode(10);
let node1 = new TreeNode(1);
let node2 = new TreeNode(2);

root.left = node1;
root.right = node2;

let node3 = new TreeNode(3);
let node4 = new TreeNode(4);

node1.left = node3;
node1.right = node4;

let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

node2.left = node5;
node2.right = node6;

console.log("inOrderTraversalRecursion", inOrderTraversalRecursion(root));
console.log("inOrderTraversal", inOrderTraversal(root));
// Returns [3, 1, 4, 10, 5, 2, 6]
