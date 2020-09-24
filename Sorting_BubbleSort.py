# Bubble Sort
# Sorting algorithm where you compare two values, switch them if needed, and then continue iterating through the array until the array is sorted

# Clarification Questions:
# -- Inputs and outputs?
# -- Expected size of input?
# -- Constraints? Time and space?

# (I) Input: An array
# (O) Output: Sorted Array
# (C) Constraints: Optimize
# (E) Edge Cases: Empty array, special chars, non integer array

# Pseudocode:
# -- Get the length of the array
# -- Create variable to set sorted as true/False
# -- Iterate through the array only if the array is still not sorted (use while loop)
# -- Create for loop to iterate through the array
# -- Each iteration, check to see if current num is greater / smaller than next num
# -- If current num is greater than next num, swap the numbers
# -- return sorted array

# Time Complexity: O(n^2)
# Space Complexity: O(n)


def bubbleSort(listInput):
    listLength = len(listInput) - 1
    sorted = False

    while not sorted:
        sorted = True
        for i in range(0, listLength):
            if listInput[i] > listInput[i+1]:
                sorted = False
                # If first item is bigger than second, flip item values
                temp = listInput[i]
                listInput[i] = listInput[i+1]
                listInput[i+1] = temp
    return listInput


print(bubbleSort([7, 5, 4, 6, 8, 9, 4, 2, 1, 2]))
