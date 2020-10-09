// CTCI 3-4 Queue via Stacks
// Implement a MyQueue class which implements a queue using two stacks

// Hint #98
// Hint #114

// What is a Queue?
// ADT = Abstract Data Type that supports FIFO or enqueue/dequeue
// Video https://www.youtube.com/watch?v=Wg8IiY1LbII

const Stack = require("./utils/Stack");

class MyQueue {
  constructor() {
    this.pushStack = new Stack();
    this.popStack = new Stack();
  }

  // Enqueue will push items onto the pushStack but will move any vals in the popStack first
  enqueue(value) {
    // If theres values in our pop stack, push them onto our pushStack
    while (this.popStack.length) {
      this.pushStack.push(this.popStack.pop());
    }

    // If the pop stack is empty, push value to pushSTack
    this.pushStack.push(value);
  }

  // Dequeue will move items from pushStack to popStack and then return the top item in popStack
  dequeue() {
    while (this.pushStack.length) {
      this.popStack.push(this.pushStack.pop());
    }
    if (this.popStack.length === 0) {
      throw { Error: "Queue is empty" };
    }

    return this.popStack.pop();
  }
}

const newQueue = new MyQueue();

newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
// newQueue.enqueue(4);
// newQueue.enqueue(5);
// newQueue.enqueue(6);

newQueue.dequeue();
console.log(newQueue.dequeue(), newQueue);
console.log(newQueue.dequeue(), newQueue);
console.log(newQueue.dequeue(), newQueue);
try {
  console.log(newQueue.dequeue(), newQueue);
} catch (e) {
  console.log(e);
}
