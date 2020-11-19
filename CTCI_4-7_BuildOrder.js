/* 
CTCI - 4.7 Build order
You are given a list of projects and a list of dependencies (which is a list of pairs of projects, where the second project is dependent on the first project). 
All of a project's dependencies must be built before the project is. Find a build order that will allow the projects to be built. If there is no valid build order, return an error.


Clarification questions:
-- 

(I) Input: 
(O) Output: 
(C) Constraints: 
(E) Edge Cases: 

Time Complexity: 
Space Complexity: 

Hint # 26
Hint # 47
Hint # 60
Hint # 85
Hint # 125
Hint # 133

Example:
Input:
    Projects: a, b, c, d, e, f
    Dependencies: (a, d), (f, b), (b, d), (f, a), (d, c)
Output: f, e, a, b, d, c

Pseudocode:
-- 
*/
