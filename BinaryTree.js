// Write a function that determines whether the left or right branch of the tree is larger. The size of each branch is the sum of the node vlaues. The function should return the string “Right” if the right side is larger and “Left” if the left side is larger. If the tree has zero nodes or if the size of the branches are equal, an empty string “” should be returned.

// HOW TO STORE/INDEX A COMPLETE BINARY TREE?
// We can use an array to index/store a complete binary tree where the root index starts at ONE, and the left child index is always twice its parent index, and the right index is the twice parent index plus one.

// For example, in above complete binary tree, the Node 6 has index 2 which is equal to 2*ROOT = 2 * 1. and the Node 2 is 2*ROOT+1 = 2*1+1 = 3.

// In the following Javascript method, we have inlined local recursive method that takes the array (complete binary tree) and a node index, which will recursively sum up the nodes in the branch until it gets to the leave nodes.

// Then we can simply call the function twice to compute the sum for left and right branch respectively. The time complexity is O(N) where N is the number of the nodes in the complete binary tree. And the space complexity is O(logN) because the recursion implies a call stack, and the depth for a complete binary tree is O(logN).

const solution = (arr) => {
  if (!arr || arr.length === 0) return "";
  const sum = (arr, index) => {
    if (index - 1 < arr.length) {
      if (arr[index - 1] === -1) return 0;
      return arr[index - 1] + sum(arr, index * 2) + sum(arr, index * 2 + 1);
    }
    return 0;
  };
  const left = sum(arr, 2);
  const right = sum(arr, 3);
  return left == right ? "" : left > right ? "Left" : "Right";
};
