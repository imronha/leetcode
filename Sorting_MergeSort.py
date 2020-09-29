def mergeSort(A):
    if len(A) > 1:
        mid = len(A) // 2
        left = A[:mid]
        right = A[mid:]

        mergeSort(left)
        mergeSort(right)

        i = 0, j = 0, k = 0
