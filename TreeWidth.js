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

function levelWidth(root) {
  const arr = [root, "end"];
  const counters = [0];

  while (arr.length > 1) {
    // Get the node to process
    const node = arr.shift();

    // If node === 'end', push back on to array
    if (node === "end") {
      counters.push(0);
      arr.push("end");
    } else {
      // If we actually have a node, push children to arr
      arr.push(...node.children);

      // Increment counter (the last counter elem in array)
      counters[counters.length - 1]++;
    }
  }
  return counters;
}
