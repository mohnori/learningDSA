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

it("We can check if the consumer called the class constructor", () => {
  const s1 = new Smoothie(["Banana"]);
  expect(s1.ingredients).toEqual(["Banana"]);
  expect(s1.getCost()).toBe(11);
});
