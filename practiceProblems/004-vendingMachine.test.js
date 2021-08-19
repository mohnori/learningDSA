const { test, expect } = require("@jest/globals");
const { vendingMachine, products } = require("./004-vendingMachine");

test("Vinding Machine Tests", () => {
  expect(vendingMachine(products, 500, 8)).toEqual({
    product: "Potato chips",
    change: [200, 50, 20, 10],
  });
  expect(vendingMachine(products, 500, 1)).toEqual({
    product: "Orange juice",
    change: [200, 200],
  });
  expect(vendingMachine(products, 200, 7)).toEqual({
    product: "Crackers",
    change: [50, 20, 10],
  });
  expect(vendingMachine(products, 100, 9)).toEqual({
    product: "Small snack",
    change: [20],
  });
  expect(vendingMachine(products, 1000, 6)).toEqual({
    product: "Condoms",
    change: [500],
  });
  expect(vendingMachine(products, 250, 4)).toEqual({
    product: "Cookies",
    change: [],
  });
  expect(vendingMachine(products, 500, 0)).toEqual(
    "Enter a valid product number"
  );
  expect(vendingMachine(products, 90, 1)).toEqual(
    "Not enough money for this product"
  );
  expect(vendingMachine(products, 0, 0)).toEqual(
    "Enter a valid product number"
  );
});
