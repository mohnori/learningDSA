/*
let s1 = new Smoothie(["Banana"]),
		s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"]),
		s3 = new Smoothie(["Mango", "Apple", "Pineapple"]),
		s4 = new Smoothie(["Pineapple", "Strawberries", "Blueberries", "Mango"]),
		s5 = new Smoothie(["Blueberries"])

Test.assertSimilar(s1.ingredients, ["Banana"])
Test.assertEquals(s1.getCost(), "$0.50")
Test.assertEquals(s1.getPrice(), "$1.25")
Test.assertEquals(s1.getName(), "Banana Smoothie")
Test.assertSimilar(s2.ingredients, ["Raspberries", "Strawberries", "Blueberries"])
Test.assertEquals(s2.getCost(), "$3.50")
Test.assertEquals(s2.getPrice(), "$8.75")
Test.assertEquals(s2.getName(), "Blueberry Raspberry Strawberry Fusion")
Test.assertSimilar(s3.ingredients, ["Mango", "Apple", "Pineapple"])
Test.assertEquals(s3.getCost(), "$7.75")
Test.assertEquals(s3.getPrice(), "$19.38")
Test.assertEquals(s3.getName(), "Apple Mango Pineapple Fusion")
Test.assertSimilar(s4.ingredients, ["Pineapple", "Strawberries", "Blueberries", "Mango"])
Test.assertEquals(s4.getCost(), "$8.50")
Test.assertEquals(s4.getPrice(), "$21.25")
Test.assertEquals(s4.getName(), "Blueberry Mango Pineapple Strawberry Fusion")
Test.assertSimilar(s5.ingredients, ["Blueberries"])
Test.assertEquals(s5.getCost(), "$1.00")
Test.assertEquals(s5.getPrice(), "$2.50")
Test.assertEquals(s5.getName(), "Blueberry Smoothie")

// made by @Joshua Señoron
*/

const { test, expect, it } = require("@jest/globals");

const Smoothie = require("./012-fruitSmoothie");

it("Check one item construture", () => {
  const s1 = new Smoothie(["Banana"]);
  expect(s1.ingredients).toEqual(["Banana"]);
  expect(s1.getCost()).toBe("$0.50");
  expect(s1.getPrice()).toBe("$1.25");
  expect(s1.getName()).toBe("Banana Smoothie");
});

it("Check multi items construture", () => {
  const s2 = new Smoothie(["Raspberries", "Strawberries", "Blueberries"]);
  expect(s2.ingredients).toEqual([
    "Raspberries",
    "Strawberries",
    "Blueberries",
  ]);
  expect(s2.getCost()).toBe("$3.50");
  expect(s2.getPrice()).toBe("$8.75");
  expect(s2.getName()).toBe("Blueberry Raspberry Strawberry Fusion");
});
it("s3 oject test", () => {
  const s3 = new Smoothie(["Mango", "Apple", "Pineapple"]);
  expect(s3.ingredients).toEqual(["Mango", "Apple", "Pineapple"]);
  expect(s3.getCost()).toBe("$7.75");
  expect(s3.getPrice()).toBe("$19.38");
  expect(s3.getName()).toBe("Apple Mango Pineapple Fusion");
});

it("s4 oject test", () => {
  const s4 = new Smoothie([
    "Pineapple",
    "Strawberries",
    "Blueberries",
    "Mango",
  ]);
  expect(s4.ingredients).toEqual([
    "Pineapple",
    "Strawberries",
    "Blueberries",
    "Mango",
  ]);
  expect(s4.getCost()).toBe("$8.50");
  expect(s4.getPrice()).toBe("$21.25");
  expect(s4.getName()).toBe("Blueberry Mango Pineapple Strawberry Fusion");
});

it("s5 oject test", () => {
  const s5 = new Smoothie(["Blueberries"]);
  expect(s5.ingredients).toEqual(["Blueberries"]);
  expect(s5.getCost()).toBe("$1.00");
  expect(s5.getPrice()).toBe("$2.50");
  expect(s5.getName()).toBe("Blueberry Smoothie");
});
