# CTCI - 1.4 Palindrome Permutation
# Given a string, write a function to check if it is a permutation of a palindrome.
# A palindrome is a word or phrase that is the same forwards and backwards.
# A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words

# Clarification Questions:
# -- What is a palindrome? Example?
# -- What is a permutation? Example?
# -- What is a palindrome permutation? Example?
# -- What characters do we count? Special chars? Capitol?

# EXAMPLE:
# -- Input: Tact Coa
# -- Output: True (permutations: "taco cat", "atco cat", etc.)

# (I) Input: String
# (O) Output: Boolean
# (C) Constraints: Optimize
# (E) Edge Cases: Empty String, spaces in front / middle / end, special chars, capitolization

# Time Complexity:
# Space Complexity:

# Pseudocode:
# -- Check length of str
# -- Create dict to store chars and counts
# -- Check dict depending on length of str (odd = only 1 odd # char, even = even # char only)

# Normalize - lowercase and get rid of strings


def isPalindromePerm(inputStr):
    inputStr = inputStr.replace(' ', "")
    inputStr = inputStr.lower()

    chars = dict()
    for letter in inputStr:
        if letter in chars:
            chars[letter] += 1
        else:
            chars[letter] = 1

    odd_count = 0
    for key, val in chars.items():
        if val % 2 != 0 and odd_count == 0:
            odd_count += 1
        elif val % 2 != 0 and odd_count != 0:
            return False
    return True


print(isPalindromePerm('Taco cAt') == True)
print(isPalindromePerm('Not a palin perm') == False)
