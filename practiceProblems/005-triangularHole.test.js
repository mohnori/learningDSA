const { doesTriangleFit } = require("./005-triangularHole");

test("Triangle hole", () => {
  expect(doesTriangleFit([1, 1, 1], [1, 1, 1])).toBe(true);
  expect(doesTriangleFit([1, 1, 1], [2, 2, 2])).toBe(true);
  expect(doesTriangleFit([1, 6, 8], [1, 6, 8])).toBe(false);
  expect(doesTriangleFit([12, 63, 42], [1, 6, 8])).toBe(false);
  expect(doesTriangleFit([3, 6, 8], [23, 63, 42])).toBe(true);
  expect(doesTriangleFit([3, 6, 8], [1, 10, 8])).toBe(false);
  expect(doesTriangleFit([3, 6, 8], [1, 10])).toBe(false);
});
