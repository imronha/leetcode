/* 

Coding Exercise - Weave
-Weave receives two queues as arguments and combines the contents of each into a new, third queue
-The third queue should contain alternating content of the two queues
-The function should handle queues of different lengths without inserting undefined into the new one
-Do not access the array inside of any queue, only use the add, remove, and peek functions

Example:
const queue1 = new Queue()
queue1.add(1);
queue2.add(2);

const queue2 = new Queue()
queue2.add('Hi')
queue2.add('There')

console.log(weave(queue1, queue2)) // [ 'There', 2, 'Hi', 1]
*/

class Queue {
  constructor() {
    this.container = [];
  }

  add(val) {
    this.container.unshift(val);
  }

  remove() {
    return this.container.pop();
  }

  peek() {
    return this.container[this.container.length - 1];
  }
}

function weave(q1, q2) {
  const newQ = new Queue();
  while (q1.peek() || q2.peek()) {
    if (q1.peek()) {
      newQ.add(q1.remove());
    }

    if (q2.peek()) {
      newQ.add(q2.remove());
    }
  }

  return newQ;
}
