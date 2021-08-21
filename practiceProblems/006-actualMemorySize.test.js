const { test, expect } = require("@jest/globals");
const { actualMemorySize } = require("./006-actualMemorySize");

test("Acual Memory", () => {
  expect(actualMemorySize("256MB")).toBe("238MB");
  expect(actualMemorySize("512MB")).toBe("476MB");
  expect(actualMemorySize("2GB")).toBe("1.86GB");
  expect(actualMemorySize("8GB")).toBe("7.44GB");
  expect(actualMemorySize("16GB")).toBe("14.88GB");
  expect(actualMemorySize("32GB")).toBe("29.76GB");
  //   Test.assertEquals(actualMemorySize("1GB"), "930MB");
  expect(actualMemorySize("1GB")).toBe("930MB");
});
