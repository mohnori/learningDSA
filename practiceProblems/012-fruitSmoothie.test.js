const { test, expect, it } = require("@jest/globals");
//import { jest } from "@jest/globals";

//import Smoothie from "./012-fruitSmoothie";
const Smoothie = require("./012-fruitSmoothie");
//jest.enableAutomock();

// //const Smoothie = require("./012-fruitSmoothie");
// beforeEach(() => {
//   // Clear all instances and calls to constructor and all methods:
//   Smoothie.mockClear();
// });
jest.mock("./012-fruitSmoothie");

it("We can check if the consumer called the class constructor", () => {
  const mock = jest.fn().mockImplementation(() => {
    return { ingredients: mockIngredients };
  });

  expect(mock.mockIngredients).toEqual(["Banana"]);
});
