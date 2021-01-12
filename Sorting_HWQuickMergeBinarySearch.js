/*

1. The visuals. We want picture of how this algo works! Minimum of 2
2. Plain English summary. Type this somewhere--you'll be sharing your screen 
3. The code. Copy/paste a javascript implementation.

*/

/*
=============================================================================
Binary Search

1. Visuals:
http://cs.armstrong.edu/liang/animation/web/BinarySearch.html
https://www.cs.usfca.edu/~galles/visualization/Search.html

2. Plain English Summary:
    -- This algorithm only works if the values are sorted
    -- Create a function that accepts a target and array to search in
    -- Create pointers for the lower and upper bounds
    -- Start at the midpoint of the array
    -- Check if the midpoint is higher or lower than the target
        -- If the midpoint is greater than the target, shift the upper bound so that we search the lower/smaller half of array
        -- If the midpoint is smaller than the target, shift the lower bound so that we search the upper/greater half of array
    -- Continue until the target is found and return target or upper and lower bound meet which indicates that the target is not found
    -- Return index of the target or -1 if not found

3. JS Code:
*/
const binarySearch = (array, target) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  while(startIndex <= endIndex) {
    let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(target === array[middleIndex]) {
      return console.log("Target was found at index " + middleIndex);
    }
    if(target > array[middleIndex]) {
      console.log("Searching the right side of Array")
      startIndex = middleIndex + 1;
    }
    if(target < array[middleIndex]) {
      console.log("Searching the left side of array")
      endIndex = middleIndex - 1;
    }
    else {
      console.log("Not Found this loop iteration. Looping another iteration.")
    }
  }
  
  console.log("Target value not found in array");
};




/*
=============================================================================
Quick Sort
https://www.guru99.com/quicksort-in-javascript.html

1. Visuals:
https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/
https://visualgo.net/bn/sorting

2. Plain English Summary:
    -- Select a pivot point (usually first, last, or mid element)
    -- Have a left and right pointer (start and end of array)
    -- Create partition helper function that will determine the pivot & swap
        -- Pivot selects middle element
        -- Sets left and right pointers
        -- Increments/decrements pointers
        -- Compares and swaps if needed
    -- If left pointer is < pivot, increment left pointer (dont swap because we want all values smaller than pivot to be on left of the pivot)
    -- If right pointer is > pivot, decrement until we find an element smaller than pivot
    -- Swap values at left and right if left > pivot and right < pivot
    -- Continue until both pointers meet
    
3. JS Code:
*/

const swap = (nums, leftIndex, rightIndex) => {
    var temp = nums[leftIndex];
    nums[leftIndex] = nums[rightIndex];
    nums[rightIndex] = temp;
  }
  
  const partition = (nums, left, right) => {
    var pivot = nums[Math.floor((right + left) /2)];
    while(left <= right){
      while(nums[left] < pivot) {
        left++;
      }
      while(nums[right] > pivot){
        right--;
      }
      if(left <= right){
        swap(nums, left, right);
        left++;
        right--;
      }
    }
    return left; // return index for quicksort
  }
  
  const quickSort = (nums, left, right) => {
    var index;
    if (nums.length > 1) {
      // Get index from partition function
      index = partition(nums, left, right);
      if (left < index -1 ) {
        // More nums on the left side of partition
        quickSort(nums, left, index -1);
      }
      if (index < right) {
        // More nums on the right side of partition
        quickSort(nums, index, right)
      }
    }
  
    return nums;
  }
  
  
  var nums = [5,3,7,6,2,9];
  console.log(quickSort(nums, 0, nums.length-1));
/*
=============================================================================
Merge Sort
https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060

1. Visuals:
https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
https://opendsa-server.cs.vt.edu/embed/mergesortAV


2. Plain English Summary:
    -- Recursive solution
    -- Keep dividing the input array in half until only 1 element is left
    -- Once there is only 1 element, compare single elements
    -- Swap if single elements are out of order
    -- Merge elements using separate merge helper function
        -- Merge function will loop through inputs and return a merged result array
3. JS Code:

*/

// Merge Sort Implentation (Recursion)
function mergeSort (unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }
    // In order to divide the array in half, we need to figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);
  
    // This is where we will be dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);
  
    // Using recursion to combine the left and right
    return merge(
      mergeSort(left), mergeSort(right)
    );
  }

  // Merge the two arrays: left and right
function merge (left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
  
    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }