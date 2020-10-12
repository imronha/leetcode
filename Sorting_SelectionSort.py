
def selectionSort(inputList):
    indexingLength = range(0, len(inputList)-1)

    for i in indexingLength:
        minValIndex = i
        for j in range(i+1, len(inputList)):
            if inputList[j] < inputList[minValIndex]:
                minValIndex = j

        if minValIndex != i:
            temp = inputList[minValIndex]
            inputList[minValIndex] = inputList[i]
            inputList[i] = temp

    return inputList


print(selectionSort([1, 3, 9, 6, 3, 2, 5, 6, 8, 9]))
