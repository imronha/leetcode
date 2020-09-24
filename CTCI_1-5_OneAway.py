# CTCI - 1.5 One Away
# There are three types of edits that can be performed on strings:
# - insert a character,
# - remove a character,
# - or replace a character.
# Given two strings, write a function to check if they are
# one edit (or zero edits) away.

# Clarification Questions:
# -- Inputs and outputs?
# -- Expected size of input?
# -- Constraints? Time and space?

# EXAMPLE:
# -- pale, ple; true
# -- pales, pale; true
# -- pale, bale; true
# -- pale, bake; false

# (I) Input: String1, String2
# (O) Output: Boolean
# (C) Constraints: Optimize
# (E) Edge Cases: Empty String

# Time Complexity: O(n) linear
# Space Complexity: constant

# Pseudocode:
# -- If inserted, str1's current char should equal str2's next char
# -- If removed, str1's next char should equal str2's current char
# -- If replaced, str1's next char should equal str2's next char
# -- Keep track of how many edits
# -- If the difference in lengths > max edits, return false
# -- Iterate through strings checking for diffs
# -- Store max length
# -- Decrement # edits if diff found, return false if <0
# -- Return true when loop is done
