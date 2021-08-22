/*
Product of Digits of Sum
Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.

Examples
sumDigProd(16, 28) ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

sumDigProd(0) ➞ 0

sumDigProd(1, 2, 3, 4, 5, 6) ➞ 2


*/

function sumDigProd(...prod) {
  let sum = 0;
  for (let i = 0; i < prod.length; i++) {
    sum = sum + prod[i];
  }

  const getOneInt = (num) => {
    if (num < 10) {
      return num;
    }
    let result = 1;
    let sumTimes = [...num.toString()];
    for (let i = 0; i < sumTimes.length; i++)
      result = result * Number(sumTimes[i]);

    return getOneInt(result);
  };

  return getOneInt(sum);
}

exports.sumDigProd = sumDigProd;
