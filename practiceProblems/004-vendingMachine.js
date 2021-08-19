/*
Vending Machine
Your task is to create a function that simulates a vending machine.

Given an amount of money (in cents ¢ to make it simpler) and a productNumber, 
the vending machine should output the correct product name and give back the correct amount of change.

The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

The return value is an object with 2 properties:

product: the product name that the user selected.
change: an array of coins (can be empty, must be sorted in descending order).
Examples
vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }

vendingMachine(products, 500, 0) ➞ "Enter a valid product number"

vendingMachine(products, 90, 1) ➞ "Not enough money for this product"
Notes
The products are fixed and you can find them in the Tests tab.
If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
If there's no change, return an empty array as the change.

// Products available
const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];

// Tests
Test.assertSimilar(vendingMachine(products, 500, 8), { product: 'Potato chips', change: [ 200, 50, 20, 10 ] });
Test.assertSimilar(vendingMachine(products, 500, 1), { product: 'Orange juice', change: [ 200, 200 ] });
Test.assertSimilar(vendingMachine(products, 200, 7), { product: 'Crackers', change: [ 50, 20, 10 ] });
Test.assertSimilar(vendingMachine(products, 100, 9), { product: 'Small snack', change: [ 20 ] });
Test.assertSimilar(vendingMachine(products, 1000, 6), { product: 'Condoms', change: [ 500 ] });
Test.assertSimilar(vendingMachine(products, 250, 4), { product: 'Cookies', change: [] });
Test.assertEquals(vendingMachine(products, 500, 0), 'Enter a valid product number');
Test.assertEquals(vendingMachine(products, 90, 1), 'Not enough money for this product');
Test.assertEquals(vendingMachine(products, 0, 0), 'Enter a valid product number');

*/
const products = [
  { number: 1, price: 100, name: "Orange juice" },
  { number: 2, price: 200, name: "Soda" },
  { number: 3, price: 150, name: "Chocolate snack" },
  { number: 4, price: 250, name: "Cookies" },
  { number: 5, price: 180, name: "Gummy bears" },
  { number: 6, price: 500, name: "Condoms" },
  { number: 7, price: 120, name: "Crackers" },
  { number: 8, price: 220, name: "Potato chips" },
  { number: 9, price: 80, name: "Small snack" },
];

function vendingMachine(products, amount, productNum) {
  if (!products.find((e) => e.number === productNum))
    return "Enter a valid product number";

  const coinsSet = [500, 200, 100, 50, 20, 10];
  const result = { product: "", change: [] };
  const product = products.find((e) => e.number === productNum);

  if (product.price > amount) return "Not enough money for this product";
  result.product = product.name;

  let change = amount - product.price;

  let i = 0;
  while (change != 0) {
    if (change < coinsSet[i]) {
      i++;
    } else if (change >= coinsSet[i]) {
      change = change - coinsSet[i];
      result.change.push(coinsSet[i]);
    }
  }
  return result;
}
// console.log(vendingMachine(products, 500, 8));
exports.products = products;
exports.vendingMachine = vendingMachine;
