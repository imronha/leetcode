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
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var inOrderTraversal = function (root) {};

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
