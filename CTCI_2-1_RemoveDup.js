/* 
CTCI - 2.1 Remove Dups
-- Remove Dups: Write code to remove duplicates from an unsorted linked list.
-- FOLLOW UP
-- How would you solve this problem if a temporary buffer is not allowed?


Clarification questions:
-- 

(I) Input: 
(O) Output: 
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 9
Hint # 40



Pseudocode:
-- 
*/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function removeDups(head) {
  const dataStore = {};
  let previous;
  let node = head;
  while (node) {
    // If node is already in the data store, 'delete' it by changing pointers
    if (dataStore[node.data]) {
      previous.next = node.next;
    } else {
      // If node is not in data store, add it
      // Set previous to the current node
      dataStore[node.data] = true;
      previous = node;
    }
    // Go to the next node
    node = node.next;
  }
  return head;
}

let node = new Node("a");
let node2 = new Node("c");
node.next = node2;
let node3 = new Node("a");
node2.next = node3;
let node4 = new Node("b");
node3.next = node4;
let node5 = new Node("c");
node4.next = node5;
let node6 = new Node("b");
node5.next = node6;
console.log(node);
console.log(JSON.stringify(removeDups(node)));
