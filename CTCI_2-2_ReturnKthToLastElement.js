/* 
CTCI - 2.1 Return Kth to last
Implement an algorithm to find the kth to last element of a singly linked list.


Clarification questions:
-- 

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

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function kthToLastElement(node, k = 0) {
  // Set fast and slow pointers (runner, slower)
  let runner = node;
  let slower = node;

  // Edge case: return null if theres no linked list or k==0
  if (!node || k === 0) {
    return null;
  }

  // Move runner k times so that slower and runner are now k nodes apart
  while (runner && k > 0) {
    runner = runner.next;
    k--;
  }

  // Move both pointers until runner == null (reaches the end of linked list)
  while (runner) {
    slower = slower.next;
    runner = runner.next;
  }

  // Return slower
  return slower;
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

console.log(node);
console.log(kthToLastElement(node, 2));
