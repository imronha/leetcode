/*

Background

The marketing team at CodeSignal would like to know how many users there are in each Coding Score range for standardized tests like the General Coding Assessment, so that they can share that information on our website. They've asked you to create a report containing that information.

Your Mission

As input, you are given a list of scores. Coding Score can be anywhere between 300 and 850. For the purpose of this task, levels are defined in the following way:

Poor: 300-599
Fair: 600-699
Good: 700-749
Excellent: 750-799
Elite: 800+
Calculate how many users are there in each level, then return a list of strings where each string represents a level and the percentage of users who fall within that range, formatted like LevelName: XX.XX%. Percentages should be displayed with two decimal points of precision. Levels should be sorted in decreasing order of those numbers, omitting any levels that have no users. In case of a tie, the higher level should appear first.

For example, if you had this input...

  [330, 723, 730, 825]
...then you should return the following:

[
  'Good: 50.00%',
  'Elite: 25.00%',
  'Poor: 25.00%'
]
[execution time limit] 4 seconds (js)

[input] array.integer scores

An array of integers in the range [300, 850].

[output] array.string

An array of strings formatted like LevelName: XX.XX%.

[JavaScript] Syntax Tips

// Prints help message to the console
// Returns a string
function helloWorld(name) {
    console.log("This prints to the console when you Run Tests");
    return "Hello, " + name;
}


*/

function codingScoreReportPercent(scores) {
  var scoreDict = {};
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 300 && scores[i] <= 599) {
      scoreDict["Poor"] ? (scoreDict["Poor"] += 1) : (scoreDict["Poor"] = 1);
    }
    if (scores[i] >= 600 && scores[i] <= 699) {
      scoreDict["Fair"] ? (scoreDict["Fair"] += 1) : (scoreDict["Fair"] = 1);
    }
    if (scores[i] >= 700 && scores[i] <= 749) {
      scoreDict["Good"] ? (scoreDict["Good"] += 1) : (scoreDict["Good"] = 1);
    }
    if (scores[i] >= 750 && scores[i] <= 799) {
      scoreDict["Excellent"]
        ? (scoreDict["Excellent"] += 1)
        : (scoreDict["Excellent"] = 1);
    }
    if (scores[i] >= 800) {
      scoreDict["Elite"] ? (scoreDict["Elite"] += 1) : (scoreDict["Elite"] = 1);
    }
  }
  //console.log(scoreDict)

  var result = [];
  var sorted = Object.entries(scoreDict).sort((a, b) => b[1] - a[1]);
  // console.log(sorted)

  for (var i = 0; i < sorted.length; i++) {
    let res =
      sorted[i][0] + ": " + (sorted[i][1] / scores.length) * 100 + ".00%";
    result.push(res.toString());
  }
  // for(var key in scoreDict){
  //     let res = key + ': ' + (scoreDict[key]/scores.length)*100 + '.00%'
  //     result.push(res.toString())
  // }

  // result.sort(function(a, b) {
  //     return b[1] - a[1];
  // })
  return result;
  console.log(result);
}
