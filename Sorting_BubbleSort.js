// # Bubble Sort
// # Sorting algorithm where you compare two values, switch them if needed, and then continue iterating through the array until the array is sorted

// # Clarification Questions:
// # -- Inputs and outputs?
// # -- Expected size of input?
// # -- Constraints? Time and space?

// # (I) Input: An array
// # (O) Output: Sorted Array
// # (C) Constraints: Optimize
// # (E) Edge Cases: Empty array, special chars, non integer array

// # Pseudocode:
// # -- Get the length of the array
// # -- Create variable to set sorted as true/False
// # -- Iterate through the array only if the array is still not sorted (use while loop)
// # -- Create for loop to iterate through the array
// # -- Each iteration, check to see if current num is greater / smaller than next num
// # -- If current num is greater than next num, swap the numbers
// # -- return sorted array

// # Time Complexity: O(n^2)
// # Space Complexity: O(n)

const bubbleSort = (inputList) => {
  let sorted = false;
  let listLength = inputList.length - 1;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < listLength; i++) {
      if (inputList[i] > inputList[i + 1]) {
        // Swap
        sorted = false;
        var temp = inputList[i];
        inputList[i] = inputList[i + 1];
        inputList[i + 1] = temp;
      }
    }
  }
  // console.log(inputList);
  return inputList;
};

console.log(bubbleSort([7, 5, 4]) == [4, 5, 7]);
console.log(
  bubbleSort([7, 5, 4, 6, 8, 9, 4, 2, 1, 2]) === [1, 2, 2, 4, 4, 5, 6, 7, 8, 9]
);
