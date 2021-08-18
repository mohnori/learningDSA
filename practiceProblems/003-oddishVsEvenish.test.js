const { test, expect } = require("@jest/globals");
const { oddishOrEvenish } = require("./003-oddishVsEvenish");

test("Test odish or evenish", () => {
  expect(oddishOrEvenish(43)).toBe("Oddish");
  expect(oddishOrEvenish(373)).toBe("Oddish");
  expect(oddishOrEvenish(55551)).toBe("Oddish");
  expect(oddishOrEvenish(694)).toBe("Oddish");
  expect(oddishOrEvenish(4433)).toBe("Evenish");
  expect(oddishOrEvenish(11)).toBe("Evenish");
  expect(oddishOrEvenish(211112)).toBe("Evenish");
  expect(oddishOrEvenish(211112.3432)).toBe("Evenish");
  expect(oddishOrEvenish("lfkdlfk")).toBe("Please provide valied number");
});
