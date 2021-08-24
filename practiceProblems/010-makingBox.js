/*

Making a Box
Create a function that creates a box based on dimension n.

Examples
makeBox(5) ➞ [
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]

makeBox(3) ➞ [
  "###",
  "# #",
  "###"
]

makeBox(2) ➞ [
  "##",
  "##"
]

makeBox(1) ➞ [
  "#"
]
Notes
N/A
*/

//this function will make the array

function makeArr(n) {
  const arr = [];

  for (i = 0; i < n; i++) {
    if ((i === 0) | (i === n - 1)) {
      arr[i] = "#".repeat(n);
    } else {
      arr[i] = "#" + " ".repeat(n - 2) + "#";
    }
  }

  return arr;
}
//this function will drow the matrix as in examples
function makeMatrix(arr) {
  let str = "";
  if (arr.length === 1) {
    return "[\n" + '"#"' + "\n" + "]";
  }
  for (i = 0; i < arr.length; i++) {
    if (i == 0) {
      str = "[" + "\n" + '"' + arr[i] + '"' + "," + "\n";
    } else if (i < arr.length - 1) {
      str = str + '"' + arr[i] + '",' + "\n";
    } else if (i == arr.length - 1) {
      str = str + '"' + arr[i] + '"' + "\n" + "]";
    }
  }

  return str;
}

function makeBox(n) {
  //return makeArr(n); // this cal will pass the test but its not look like the eaxample in instructions
  return makeMatrix(makeArr(n));

  /*
to drow the matrix like instruction >> "return makeMatrix((makArr(n)))"
*/
}

// function charBox(n) {
//   return makeMatrix(makeArr(n));
// }

exports.makeBox = makeBox;
exports.makeArr = makeArr;
exports.makeMatrix = makeMatrix;
