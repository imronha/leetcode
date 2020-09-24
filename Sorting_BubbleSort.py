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
