# CTCI - 1.2 Check Permutations
# Given two strings, write a method to decide if one is a permutation of the other.

# Clarification questions:
# -- Is the comparison case sensitive? ie. Is "God" a permutation of "dog"?
# -- Is whitespace significant? ie. Is "  dog" a permutation of "dog"?

# (I) Input: Two strings
# (O) Output: Boolean
# (C) Constraints: Optimize
# (E) Edge Cases: Empty String, spaces, special chars, case sensitive

# Time Complexity: Linear O(2n) - looping through two strings
# Space Complexity: Linear O(n)

# Pseudocode:
# -- If strings are not same length, return false
# -- Iterate through one string
# -- Add chars to dict, assign value 1 or +1 if already exists
# -- Iterate through second string
# -- If chars dict has str2 char and !=0, -1


def isPermutaion(str1, str2):
    # If string lengths are dif, return false
    if len(str1) != len(str2):
        return False

    chars = dict()
    # Iterate through first string and add letters to dict, decrement if letter found
    for letter in str1:
        if letter in chars:
            chars[letter] -= 1
        else:
            chars[letter] = 1

    for letter in str2:
        if letter in chars:
            chars[letter] -= 1
        else:
            chars[letter] = 1
    # Returns true if all values in chars are 0, false if not 0
    return all(value == 0 for value in chars.values())


print(isPermutaion('dog', 'god') == True)
print(isPermutaion('cat', 'cta') == True)
print(isPermutaion('NOT', 'Top') == False)
