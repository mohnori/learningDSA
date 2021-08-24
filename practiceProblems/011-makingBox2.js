/*

Making a Box 2.0!
This is based on Helen Yu's Making a Box challenge. This challenge is the same execpt that instead of an array of strings, your function should output a matrix of characters.

Examples
charBox(1) ➞ [
  ["#"]
]

charBox(4) ➞ [
  ["#", "#", "#", "#"],
  ["#", " ", " ", "#"],
  ["#", " ", " ", "#"],
  ["#", "#", "#", "#"]
]

charBox(2) ➞ [
  ["#", "#"],
  ["#", "#"]
]

*/

function charBox(size) {
  let arr = [];
  let i = 0,
    j = 0;
  if (size === 0) {
    arr.push([]);
    arr[i].push();
  } else if (isNaN(size) | (size < 0) | !Number.isInteger(size)) {
    return -1;
  } else {
    for (i = 0; i < size; i++) {
      arr.push([]);

      for (j = 0; j < size; j++) {
        if ((i === 0) | (i === size - 1) | (j === 0) | (j === size - 1)) {
          arr[i].push("#");
        } else arr[i].push(" ");
      }
    }
  }
  return arr;
}
// console.log(charBox(10));
exports.charBox = charBox;
