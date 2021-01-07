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

var items = [5,3,7,6,2,9];
function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]

/*
=============================================================================
Merge Sort

1. Visuals:

2. Plain English Summary:

3. JS Code:

*/