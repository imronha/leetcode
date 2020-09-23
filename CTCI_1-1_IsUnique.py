# CTCI - 1.1 Is Unique
# Implement an algorithm to deternmine if a string has all unique characters. What if you cannot use additional data structures?

# Clarification questions:
# -- Is the string ASCII or UNICODE?

# (I) Input: String
# (O) Output: Boolean
# (C) Constraints: No additional data structures
# (E) Edge Cases: Empty String, spaces, special chars

# Time Complexity: Linear O(n)
# Space Complexity: Linear O(n)

# Pseudocode:
# -- Create dictionary to store chars
# -- Iterate through string
# -- If char is not in chars dict, add it
# -- If char is in chars dict, return false (found duplicate)
# -- Return true at the end (no duplicates found)

# Remove spaces from input and make all letter lowercase


def normalize(inputStr):
    inputStr = inputStr.replace(' ', '')
    return inputStr.lower()


def isUnique(inputStr):
    lettersDict = dict()
    for letter in inputStr:
        if letter in lettersDict:
            return False
        else:
            lettersDict[letter] = 1
    return True


print(isUnique('abcdefghijk') == True)
print(isUnique('bbbb') == False)
print(isUnique('   ') == False)
