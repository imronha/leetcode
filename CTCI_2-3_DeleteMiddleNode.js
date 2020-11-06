/* 
CTCI - 


Clarification questions:
-- 

(I) Input: 
(O) Output: 
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 177
Hint # 182
Hint # 263
Hint # 342


Pseudocode:
-- 
*/
function deleteMiddleNode(node) {
  if (!node || !node.next) {
    return null;
  }

  let runner = node.next;
  let previous = null;

  while (runner.next) {
    previous = node;
    node = node.next;
    runner = runner.next;
    runner = runner.next ? runner.next : runner;
  }
  console.log("middle node", node);
  previous.next = node.next;
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

node = new Node("1");
node2 = new Node("2");
node.next = node2;
node3 = new Node("3");
node2.next = node3;
node4 = new Node("4");
node3.next = node4;
node5 = new Node("5");
node4.next = node5;
node6 = new Node("6");
node5.next = node6;
