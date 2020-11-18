class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    // Create new node and push to current nodes children
    this.children.push(new Node(data));
  }

  remove(data) {
    // Filter through children and check if nodes match data
    // Filter does not modify original array so do it manually
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      // node.children is an array so we need to add the children data to our arr
      arr.push(...node.children);
      fn(node);
    }
  }

  traversalDF() {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      // node.children is an array so we need to add the children data to our arr
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

// var Tree = function (value) {
//   this.value = value;
//   this.children = [];
// };

// module.exports = Tree;
