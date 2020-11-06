/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

*/
function reverseLinkedList(head) {
  var prev = null;
  var current = head;
  // next pointed already created in SLL definition
  while (current) {
    var temp = current.next; // Save next node
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
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
