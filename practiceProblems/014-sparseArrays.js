//https://www.hackerrank.com/challenges/sparse-arrays/problem
function matchingStrings(strings, queries) {
  let stringsObj = {};
  let result = [];
  for (let val of strings) {
    stringsObj[val] = (stringsObj[val] || 0) + 1;
  }
  for (let val of queries) {
    if (stringsObj[val]) {
      result.push(stringsObj[val]);
    } else result.push(0);
  }
  return result;
}

let str1 = [
  "abcde",
  "sdaklfj",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
  "na",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
];
let qur1 = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];
console.log(matchingStrings(str1, qur1));
