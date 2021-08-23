// // ADDITIVE PERSISTENCE
// Test.assertEquals(additivePersistence(5), 0);
// Test.assertEquals(additivePersistence(27), 1);
// Test.assertEquals(additivePersistence(58), 2);
// Test.assertEquals(additivePersistence(5789), 3);
// // MULTIPLICATIVE PERSISTENCE
// Test.assertEquals(multiplicativePersistence(7), 0);
// Test.assertEquals(multiplicativePersistence(1234567890), 1);
// Test.assertEquals(multiplicativePersistence(39), 3);
// Test.assertEquals(multiplicativePersistence(6788), 6);
// Test.assertEquals(multiplicativePersistence(277777788888899), 11);
const { test, expect } = require("@jest/globals");
const {
  multiplicativePersistence,
  additivePersistence,
} = require("./009-Presistence");

test("ADDITIVE PERSISTENCE ", () => {
  expect(additivePersistence(5)).toBe(0);
  expect(additivePersistence(27)).toBe(1);
  expect(additivePersistence(58)).toBe(2);
  expect(additivePersistence(5789)).toBe(3);
});
test("multiplicativePersistence ", () => {
  expect(multiplicativePersistence(7)).toBe(0);
  expect(multiplicativePersistence(1234567890)).toBe(1);
  expect(multiplicativePersistence(39)).toBe(3);
  expect(multiplicativePersistence(6788)).toBe(6);
  expect(multiplicativePersistence(277777788888899)).toBe(11);
});
