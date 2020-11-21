/* 
CTCI - 4.3 List of Depths
Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (ie. if you have a tree with depth D, you'll have D linked lists)


Clarification questions:
-- 

(I) Input: 
(O) Output: 
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 107
Hint # 123
Hint # 135


Pseudocode:
-- 
*/
var BST = require("./../util/BST");
var LinkedList = require("./../util/LinkedList");
var Queue = require("./../util/Queue");

var listOfDepths = function (bst) {
  var listOfLists = [];
  var list = null;
  var newNode;
  var q = new Queue();
  var nextq = new Queue();
  var currNode = bst;

  q.add(currNode);
  while (!q.isEmpty()) {
    currNode = q.remove();
    newNode = new LinkedList(currNode.value);
    newNode.next = list;
    list = newNode;
    if (currNode.left !== null) {
      nextq.add(currNode.left);
    }
    if (currNode.right !== null) {
      nextq.add(currNode.right);
    }
    if (q.isEmpty()) {
      listOfLists.push(list);
      list = null;
      q = nextq;
      nextq = new Queue();
    }
  }
  return listOfLists;
};

/* TEST */
// 1, 2, 3, 4, 5, 6, 7
var tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(listOfDepths(tree));
