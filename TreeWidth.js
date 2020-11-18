/*

Coding Exercise - Level Width
- Given a root node of a tree, return an array where each element is the width of the tree at each level.

Example:

Given:
         10
         /|\
        / | \
       /  |  \
      1   4   2
     / \     / \
    3   4   5   6

Answer:
[1, 3, 4]

*/

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
}
