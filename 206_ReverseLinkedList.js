/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

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
