/*
Test.assertEquals(sumDigProd(8, 16, 89, 3), 6)
Test.assertEquals(sumDigProd(16, 28), 6)
Test.assertEquals(sumDigProd(9), 9)
Test.assertEquals(sumDigProd(26, 497, 62, 841), 6)
Test.assertEquals(sumDigProd(0), 0)
Test.assertEquals(sumDigProd(17737, 98723, 2), 6)
Test.assertEquals(sumDigProd(123, -99), 8)
Test.assertEquals(sumDigProd(9, 8), 7)
Test.assertEquals(sumDigProd(167, 167, 167, 167, 167, 3), 8)
Test.assertEquals(sumDigProd(111111111), 1)
Test.assertEquals(sumDigProd(98526, 54, 863, 156489, 45, 6156), 2)
Test.assertEquals(sumDigProd(999, 999), 8)
Test.assertEquals(sumDigProd(1, 2, 3, 4, 5, 6), 2)
Test.assertEquals(sumDigProd(999, 2222), 2)
Test.assertEquals(sumDigProd(8618, -2), 6)
*/
const { test, expect } = require("@jest/globals");
const { sumDigProd } = require("./008-ProductofDigitsofSum");

test("should 8, 16, 89, 3 be 6 ", () => {
  expect(sumDigProd(8, 16, 89, 3)).toBe(6);
});
test("should 16 ,28  be 6 ", () => {
  expect(sumDigProd(16, 28)).toBe(6);
});

test("should 9 be 9", () => {
  expect(sumDigProd(9)).toBe(9);
});

test("should 26, 497, 62, 841  be 6 ", () => {
  expect(sumDigProd(26, 497, 62, 841)).toBe(6);
});
test("should 0  be 0 ", () => {
  expect(sumDigProd(0)).toBe(0);
});
test("should 17737, 98723, 2  be 6 ", () => {
  expect(sumDigProd(17737, 98723, 2)).toBe(6);
});
test("should 123, -99  be 8 ", () => {
  expect(sumDigProd(123, -99)).toBe(8);
});
test("should 9,8  be 7 ", () => {
  expect(sumDigProd(9, 8)).toBe(7);
});
test("should 167, 167, 167, 167, 167, 3  be 8 ", () => {
  expect(sumDigProd(167, 167, 167, 167, 167, 3)).toBe(8);
});
test("should 111111111  be 1 ", () => {
  expect(sumDigProd(111111111)).toBe(1);
});
test("should 98526, 54, 863, 156489, 45, 6156  be 2 ", () => {
  expect(sumDigProd(98526, 54, 863, 156489, 45, 6156)).toBe(2);
});
test("should 999 ,999  be 8 ", () => {
  expect(sumDigProd(999, 999)).toBe(8);
});
test("should 1, 2, 3, 4, 5, 6  be 2 ", () => {
  expect(sumDigProd(1, 2, 3, 4, 5, 6)).toBe(2);
});
test("should 999, 2222  be 2 ", () => {
  expect(sumDigProd(999, 2222)).toBe(2);
});
test("should 8618, -2  be 6 ", () => {
  expect(sumDigProd(8618, -2)).toBe(6);
});
