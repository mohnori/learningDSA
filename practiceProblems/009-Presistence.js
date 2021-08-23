/*
Persistence
The additive persistence of an integer, n, is the number of times you have to replace n with the sum of its digits until n becomes a single digit integer.

The multiplicative persistence of an integer, n, is the number of times you have to replace n with the product of its digits until n becomes a single digit integer.

Create two functions that take an integer as an argument and:

Return its additive persistence.
Return its multiplicative persistence.
Examples: Additive Persistence
additivePersistence(1679583) ➞ 3
// 1 + 6 + 7 + 9 + 5 + 8 + 3 = 39
// 3 + 9 = 12
// 1 + 2 = 3
// It takes 3 iterations to reach a single-digit number.

additivePersistence(123456) ➞ 2
// 1 + 2 + 3 + 4 + 5 + 6 = 21
// 2 + 1 = 3

additivePersistence(6) ➞ 0
// Because 6 is already a single-digit integer.
Examples: Multiplicative Persistence
multiplicativePersistence(77) ➞ 4
// 7 x 7 = 49
// 4 x 9 = 36
// 3 x 6 = 18
// 1 x 8 = 8
// It takes 4 iterations to reach a single-digit number.

multiplicativePersistence(123456) ➞ 2
// 1 x 2 x 3 x 4 x 5 x 6 = 720
// 7 x 2 x 0 = 0

multiplicativePersistence(4) ➞ 0
// Because 4 is already a single-digit integer.
Notes
The input n is never negative.
*/

function getSum(num) {
  let arr = [...num.toString()];
  let sum = 1;
  if (getSum.caller.name == "additivePersistence") {
    sum = 0;
  }

  for (i = 0; i < arr.length; i++) {
    if (getSum.caller.name === "additivePersistence") {
      sum = sum + Number(arr[i]);
    } else if (getSum.caller.name === "multiplicativePersistence") {
      sum = sum * Number(arr[i]);
    }
  }
  return sum;
}
function additivePersistence(n) {
  if (n < 10) {
    return 0;
  }
  result = 0;
  while (n > 9) {
    n = getSum(n);
    result++;
  }
  return result;
}

function multiplicativePersistence(n) {
  if (n < 10) {
    return 0;
  }
  result = 0;
  while (n > 9) {
    n = getSum(n);
    result++;
  }
  return result;
}
exports.multiplicativePersistence = multiplicativePersistence;
exports.additivePersistence = additivePersistence;
