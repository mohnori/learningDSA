/*

Oddish vs. Evenish
Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

Examples
oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
***************************************************
*/

function oddishOrEvenish(n) {
  if (typeof n == "number") {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let arr = n.toString(10).replace(/\D/g, "0").split("").map(Number);
    let result = arr.reduce(reducer);
    if (result % 2 === 0) {
      return "Evenish";
    } else {
      return "Oddish";
    }
  } else return "Please provide valied number";
}

exports.oddishOrEvenish = oddishOrEvenish;
