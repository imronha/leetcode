// CTCI - 3.3 Stack of plates
// Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this.

//SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.

// SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack (that is, pop () should return the same values as it would if there were just a single stack).

// Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack.

// Hint #64
// You will need to keep track of the size of each substack. When one stack is full, you may need to create a new stack

// Hint #81
// Popping an element at a specific substack will mean that some stacks aren't at full capacity. Is this an issue? There's no right answer, but you should think about how to handle this.

const Stack = require("./utils/Stack");

class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stackSet = [];
  }

  // Gets last stack in stackset
  getLastStack() {
    return this.stackSet[this.stackSet.length - 1];
  }

  push(value) {
    // Get the last stack
    let lastStack = this.getLastStack();
    // Check if stackSet is empty (no stacks) or if last stack has reached capacity
    if (this.stackSet.length === 0 || lastStack.size() === this.capacity) {
      // Create new stack and push value to stack
      var newStack = new Stack();
      newStack.push(value);

      // Push stack into stackset
      this.stackSet.push(newStack);
    } else {
      // Else push value to last set
      lastStack.push(value);
    }
  }

  pop() {
    // Check if theres anything to pop
    if (this.stackSet.length === 0) {
      return undefined;
    }

    // Get last stack and pop last item
    let lastStack = this.getLastStack();
    let popped = lastStack.pop();

    // If stack size is now == 0 , pop the stack from stacksets
    if (lastStack.size() === 0) {
      this.stackSet.pop();
    }
    return popped;
  }

  peek() {
    let lastStack = this.getLastStack();
    return lastStack.peek();
  }

  isEmpty() {
    return this.stackSet.length === 0;
  }

  popAt(index) {
    // Check if index is out of range
    if (index < 0 || index >= this.stackSet.length) return false;

    // Pop value from specified substack
    let popped = this.stackSet[index].pop();
    if (this.stackSet[index].size() == 0) {
      // Delete stack if its now empty
      this.stackSet.splice(index, 1);
    }
    return popped;
  }
}

/* TESTS */

var s = new SetOfStacks(3);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.push(6);
s.push(7);
s.push(8);
s.push(9);
s.push(10);
s.push(11);
s.push(12);
s.push(13);
s.push(14);

console.log(s.peek(), 14);

s.popAt(2);
s.popAt(2);
s.popAt(2);

console.log(s.peek(), 14);

s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();
s.pop();

console.log(s.peek(), 2);
