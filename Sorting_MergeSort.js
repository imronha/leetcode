/*

Merge Sort

Merge sort divides the array in half, sorts each of those halves, and then merges them back together. Each of those halves has the same sorting algorithm applied to it. Eventually, you are merging just two single element arrays. It is the 'merge' part that does all the heavy lifting.

https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060

https://visualgo.net/en



1. Take full array
function mergeSort(array)

2. recurse
 -- base case: array.length === 1
 -- 2a. split array into left and right (get mid, get left, get right)
 -- 2b. merge the split arrays

3. merge:
 -- 3a. take left and right array
 -- 3b. starting at the front of each array, compare the eleents and add to the result array
 -- 3c. repeat 3b until one of the indeces has exhausted the array
 -- 3d. concat the arrays and ensure the final element is on the result array
 -- return

*/

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