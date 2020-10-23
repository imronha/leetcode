/* 
CTCI - 4.1 Route between nodes
Given a directed graph and two nodes S and E, design an algorithm to find out whether there is a route between S and E

Clarification questions:
-- What is a directed graph? Undirected graph?

(I) Input: 
(O) Output: 
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 


Pseudocode:
-- 
*/
class Graph {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
    this.id = ++Graph.id;
  }
}
Graph.id = 0;

function routeBetweenNodes(start, end) {
  if (!start || !end) {
    return false;
  }

  const visitedNodes = {}; // to store visited nodes
  const queue = [start];
  visitedNodes[start.id] = true;

  while (queue.length) {
    const processNode = queue.shift();

    for (let child of processNode.children) {
      if (child === end) {
        return true;
      }

      if (!visitedNodes[child.id]) {
        queue.push(child);
        visitedNodes[child.id] = true;
      }
    }
  }
  return false;
}

/* Tests */

// Create new nodes
let node1 = new Graph(1);
let node2 = new Graph(2);
let node3 = new Graph(3);
let node4 = new Graph(4);
let node5 = new Graph(5);
let node6 = new Graph(6);
let node7 = new Graph(7);
let node8 = new Graph(8);
let node9 = new Graph(9);
let node10 = new Graph(10);

// Assign children to nodes
node1.children.push(node2, node3, node6);
node2.children.push(node10);
node3.children.push(node4);
node4.children.push(node5);
node5.children.push(node3);
node6.children.push(node2, node8);
node7.children.push(node5);
node8.children.push(node9);
node9.children.push(node7);
node10.children.push(node2);

// Test cases
console.log(routeBetweenNodes(node6, node10) == true);
console.log(routeBetweenNodes(node6, node9) == true);
console.log(routeBetweenNodes(node6, node1) == false);
