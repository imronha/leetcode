// CTCI - 3.1 Three in one
// Describe how you could use a single array to implement three stacks

// Hint #2:
// A stack is simply a data structure in which the most recently added elements are removed first. Can you simulate a single stack using an array? Remember that there are many possible solutions, and there are tradeoffs of each

// Hint #12:
// We could simulate three stacks in an array by just allocating the first and third of the array to the first stack, the second third to the second stack, and the final third to the third stack. One might actually be much bigger than the others though. Can we be more flexible with the divisions?

// Hint #38:
// If you want to allow for flexible divisions, you can shift stacks around. Can you ensure that all available capacity is used?

// Hint #78:
// Consider having each node know the minimum of its 'substack' (all the elements beneath it, including itself)

// Flexible divisions approach
// Allow the stack blocks to be flexible in size. When one stack exceeds its initial capacity, we grow the allowable capacity and shift elements as necessary
// Design the array to be circular, such that the final stack may start at the end of the array and wrap around to the beginning

var ThreeInOne = function () {
  // Create array
  this.container = [];

  // Create pointers for the other two stacks
  this.middleTop = 0;
  this.middleBottom = 0;
};

// Push(value) for all three stacks
ThreeInOne.prototype.push1 = function (value) {
  // Add value to the front of the array
  this.container.unshift(value);

  // Increment pointers
  this.middleBottom++;
  this.middleTop++;
};

ThreeInOne.prototype.push2 = function (value) {
  // Splice(index to insert at, delete count, value to insert)
  this.container.splice(this.middleTop, 0, value);

  // Increment the middle stacks pointer because we inserted a value at this.middleTop index
  this.middleTop++;
};

ThreeInOne.prototype.push3 = function (value) {
  // Add value to the end of array
  this.container.push(value);
};

// Pop() for all three stacks
ThreeInOne.prototype.pop1 = function () {
  // Return undefined if empty
  if (this.isEmpty1()) {
    return undefined;
  }

  // Shift removes first element in array and returns it
  var element = this.container.shift();

  // Decrement pointers when first item is removed from array
  if (this.middleBottom > 0) {
    this.middleBottom--;
    this.middleTop--;
  }
  return element;
};

ThreeInOne.prototype.pop2 = function () {
  // Return undefined if empty
  if (this.isEmpty2()) {
    return undefined;
  }

  // Splice out the last item in the middle stack
  var element = this.container[this.middleTop - 1];
  this.container.splice(this.middleTop - 1, 1);
  if (this.middleBottom < this.middleTop) {
    this.middleTop--;
  }
  return element;
};

ThreeInOne.prototype.pop3 = function (value) {
  // Pop last item in array (last item in last stack)
  if (this.isEmpty3()) {
    return undefined;
  }

  return this.container.pop(value);
};

// Peek() for all three stacks
ThreeInOne.prototype.peek1 = function () {
  // Returns first item in array (first item in first stack if not empty)
  return this.isEmpty1() ? undefined : this.container[0];
};

ThreeInOne.prototype.peek2 = function () {
  // Returns 'top' item in middle stack if not empty
  return this.isEmpty2() ? undefined : this.container[this.middleTop - 1];
};

ThreeInOne.prototype.peek3 = function () {
  // Returns last item in array (last item in last stack) if not empty
  return this.isEmpty3()
    ? undefined
    : this.container[this.container.length - 1];
};

// .isEmpty() for all three stacks
ThreeInOne.prototype.isEmpty1 = function () {
  // If middleBottom is 0 (not incremented) that means first stack is empty
  return this.middleBottom === 0;
};

ThreeInOne.prototype.isEmpty2 = function () {
  // If middleTop and middleBottom are the same number middle stack is empty
  return this.middleBottom === this.middleTop;
};

ThreeInOne.prototype.isEmpty3 = function () {
  // If middleTop is the same as the array length, then last stack is empty
  return this.middleTop === this.container.length;
};

/* TESTS */

var t = new ThreeInOne();
t.push1("1a");
t.push1("1b");
t.push1("1c");
t.push2("2a");
t.push2("2b");
t.push2("2c");
t.push3("3a");
t.push3("3b");
t.push3("3c");

var a1 = t.pop1();
var a2 = t.pop2();
var a3 = t.pop3();

var peek1 = t.peek1();
var peek2 = t.peek2();
var peek3 = t.peek3();

var b1 = t.pop1();
var b2 = t.pop2();
var b3 = t.pop3();

var isEmptya1 = t.isEmpty1();
var isEmptya2 = t.isEmpty2();
var isEmptya3 = t.isEmpty3();

var c1 = t.pop1();
var c2 = t.pop2();
var c3 = t.pop3();

var d1 = t.pop1();
var d2 = t.pop2();
var d3 = t.pop3();

var isEmptyb1 = t.isEmpty1();
var isEmptyb2 = t.isEmpty2();
var isEmptyb3 = t.isEmpty3();

console.log(t.container, t.middleBottom, t.middleTop);
console.log(a1, a2, a3);
console.log(peek1, peek2, peek3);
console.log(b1, b2, b3);
console.log(isEmptya1, isEmptya2, isEmptya3);
console.log(c1, c2, c3);
console.log(d1, d2, d3);
console.log(isEmptyb1, isEmptyb2, isEmptyb3);
