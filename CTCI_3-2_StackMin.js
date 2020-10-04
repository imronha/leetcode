// CTCI - 3.2 Stack Min
// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.

// Hint #27:
// Observe that the minimum element doesn't change very often. It only changes when a smaller elemnt is added, or
// when the smallest element is popped.

// Hint #59:
// What if we kept track of extra data at each stack node? What sort of data might make it easier to solve the problem?

// Hint #78:
// Consider having each node know the minimum of its 'substack' (all the elements beneath it, including itself).

// Solution:

// Approach, keep an additional stack that keeps the mins
var stackMin = function () {
  this.stack = new Stack();
  this.minStack = new Stack();
};

stackMin.prototype.push = function (value) {
  // If minstack is empty, push value onto min stack
  if ((this.minStack.size = 0)) {
    this.minStack.push(value);
    // if current value is less than the first item in minstack, push to minstack
  } else if (value <= this.minStack.peek()) {
    this.minStack.push(value);
  }
  // Always push to main stack
  this.stack.push(value);
};

stackMin.prototype.pop = function () {
  // Remove top element on main stack
  var removedElement = this.stack.pop();
  // If the popped num == the top element on minStack, pop minstack
  if (removedElement === this.minStack.peek()) {
    this.currMin = this.minStack.pop();
  }
  return removedElement;
};

stackMin.prototype.peek = function () {
  return this.stack.peek();
};

stackMin.prototype.isEmpty = function () {
  return this.stack.size === 0;
};

stackMin.prototype.min = function () {
  return this.minStack.peek();
};

// Create Stack data structure
class Stack {
  constructor() {
    this.storage = {};
    this.size = 0;
  }

  push(val) {
    this.storage[this.size] = val;
    this.size++;
  }

  pop() {
    let top = this.storage[this.size - 1];
    this.size--;
    delete this.storage[this.size];
    return top;
  }

  peek() {
    return this.storage[this.size - 1];
  }

  empty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}
/* TEST */

var s = new stackMin();
s.push(9);
s.push(8);
s.push(1);
s.push(2);
s.push(1);
s.push(9);

console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 2);
console.log(s.min(), 1);
s.pop();
s.pop();
console.log(s.peek(), 8);
console.log(s.min(), 8);
s.pop();
s.pop();
console.log(s.isEmpty(), true);
console.log(s.min(), undefined);
