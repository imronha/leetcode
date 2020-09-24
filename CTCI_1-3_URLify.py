# /*
# CTCI - 1.3 URLify
# Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: if implementing in JAVA, please use a character array so that you can perform this operation in place.)

# Clarification questions:
# --

# Example:
# -- Input: "Mr John Smith   ", 13
# -- Output: "Mr%20John%20Smith"

# (I) Input: String, Integer
# (O) Output: String
# (C) Constraints: Optimize
# (E) Edge Cases: Empty String, spaces in front / middle / end

# Time Complexity:
# Space Complexity:

# Pseudocode:
# -- Create output string, character count, and space count
# -- First iteration - count non-space chars
# -- Second iteration - if char == ' ', concat '%20' to output, else concat the char
# -- Check for extra spaces (if num arg > space) and add '%20' to the end of outputstr
# */


def urlify(str, num):
    str = str[0:num]
    print(str)
    str = str.replace(' ', '%20')
    return str


print((urlify("Mr John Smith   ", 13) == 'Mr%20John%20Smith') == True)
