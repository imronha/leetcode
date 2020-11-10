// class Node {
//   constructor(value, next = null) {
//     this.value = value;
//     this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(value) {
//     let node = new Node(value);
//     // if list is empty
//     if (!this.head) {
//       this.head = node;
//       this.tail = node;
//     } else {
//       this.tail.next = node;
//       this.tail = node;
//     }
//   }

//   delete(node) {
//     let next = node.next;
//   }

//   prepend(value) {
//     let node = new Node(value);
//     node.next = this.head;
//     this.head = node;
//   }

//   pop() {
//     let cur = this.head;

//     // only one or no item exists
//     if (!cur) return null;
//     if (!cur.next) {
//       this.head = null;
//       return cur;
//     }
//     // move till the 2nd last
//     while (cur.next.next) cur = cur.next;

//     let last = this.tail;
//     this.tail = cur;
//     this.tail.next = null;
//     return last;
//   }

//   popFirst() {
//     let first = this.head;
//     if (this.head && this.head.next) {
//       this.head = this.head.next;
//       first.next = null;
//     } else this.head = null;
//     return first;
//   }

//   head() {
//     return this.head;
//   }

//   removeAt(index) {
//     let i = 0;
//     let cur = this.head;
//     let prev = null;

//     while (cur != null) {
//       if (i == index) {
//         // remove
//         if (prev == null) this.head = cur.next;
//         else prev.next = cur.next;
//         cur.next = null;
//         return cur.value;
//       } else {
//         prev = cur;
//         cur = cur.next;
//         i++;
//       }
//     }
//     return null;
//   }

//   insertAt(index, value) {
//     if (index == 0) return this.prepend(value);
//     let cur = this.head;
//     let i = 0;

//     while (cur != null) {
//       if (i == index - 1) {
//         let node = new Node(value);
//         node.next = cur.next;
//         cur.next = node;
//         return true;
//       } else {
//         i++;
//         cur = cur.next;
//       }
//     }
//     return false;
//   }

//   tail() {
//     return this.tail;
//   }

//   _toArray() {
//     let arr = [];
//     let cur = this.head;
//     while (cur) {
//       arr.push(cur.value);
//       cur = cur.next;
//     }

//     return arr;
//   }
// }

module.exports = LinkedList;

/* TEST */

// let l = new LinkedList();
// l.append(3);
// l.append(4);
// l.append(10);
// l.append(20);
// l.append(5);

// console.log(l.removeAt(1), 4);
// console.log(l.pop().value, 5);

// console.log(l._toArray());
// l.insertAt(2, 40);
// console.log(l._toArray());

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  insertFirst(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    var size = 0;
    let node = this.head;
    while (node) {
      node = node.next;
      size++;
    }
    return size;
  }
  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    } else if (!this.head.next) {
      this.head = null;
      return;
    }

    let slow = this.head;
    let runner = this.head.next;
    while (runner.next) {
      slow = runner;
      runner = runner.next;
    }

    slow.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      // If chain isnt empty, add new node to last node
      last.next = new Node(data);
    } else {
      // If no nodes
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter == index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index - 1);
    // If node is out of bounds or the last node (doesnt have previous.next)
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
}
