// CTCI - 3.3 Stack of plates
// Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this.

//SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity.

// SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack (that is, pop () should return the same values as it would if there were just a single stack).

// Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack.

class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }
  push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }
  length() {
    return this.top;
  }
  peek() {
    return this.data[this.top - 1];
  }
  isEmpty() {
    return this.top === 0;
  }
  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.pop(); // removes the last element
    }
  }
  print() {
    var top = this.top - 1; // because top points to index where new    element to be inserted
    while (top >= 0) {
      // print upto 0th index
      console.log(this.data[top]);
      top--;
    }
  }
  reverse() {
    this._reverse(this.top - 1);
  }
  _reverse(index) {
    if (index != 0) {
      this._reverse(index - 1);
    }
    console.log(this.data[index]);
  }
}

class SetOfStacks {
  constructor(capacity) {
    this.capacity = capacity;
    this.stackSet = [];
  }
}
