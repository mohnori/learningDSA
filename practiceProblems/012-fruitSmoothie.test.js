const { test, expect, it } = require("@jest/globals");

const Smoothie = require("./012-fruitSmoothie");

it("We can check if the consumer called the class constructor", () => {
  const s1 = new Smoothie(["Banana"]);
  expect(s1.ingredients).toEqual(["Banana"]);
});
