def mergeSort(A):
    if len(A) > 1:
        mid = len(A) // 2
        left = A[:mid]
        right = A[mid:]

        mergeSort(left)
        mergeSort(right)

        # Merge the arrays
        i = 0
        j = 0
        k = 0
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                A[k] = left[i]
                i += 1
            else:
                A[k] = right[j]
                j += 1
            k = k + 1

        while i < len(left):
            A[k] = left[i]
            i = i + 1
            k = k + 1

        while j < len(right):
            A[k] = right[j]
            j = j + 1
            k = k + 1


A = [2, 7, 89, 4, 3, 564, 7, 80]
print('Original Array', A)
mergeSort(A)
print('Sorted Array', A)
