/*
Does the Triangle Fit into the Triangular Hole?
Create a function that takes the dimensions of two triangles (as arrays) and checks if the first triangle fits into the second one.

Examples
doesTriangleFit([1, 1, 1], [1, 1, 1]) ➞ true

doesTriangleFit([1, 1, 1], [2, 2, 2]) ➞ true

doesTriangleFit([1, 2, 3], [1, 2, 2]) ➞ false

doesTriangleFit([1, 2, 4], [1, 2, 6]) ➞ false
Notes
Triangle fits if it has the same or smaller size as the hole.
The function should return false if the triangle with that dimensions is not possible.

Test.assertEquals(doesTriangleFit([1, 1, 1], [1, 1, 1]), true, "Same triangle")
Test.assertEquals(doesTriangleFit([1, 1, 1], [2, 2, 2]), true, "Smaller triangle")
Test.assertEquals(doesTriangleFit([1, 6, 8], [1, 6, 8]), false, "Not a triangle")
Test.assertEquals(doesTriangleFit([12, 63, 42], [1, 6, 8]), false, "too small hole")
Test.assertEquals(doesTriangleFit([3, 6, 8], [23, 63, 42]), true, "Hole is too big")
Test.assertEquals(doesTriangleFit([3, 6, 8], [1, 10, 8]), false, "impossible hole")
*/
function doesTriangleFit(tri, hole) {
  const isTriangle = (tr) => {
    if (tr.length !== 3) return false;

    return tri[0] + tri[1] > tri[2] &&
      tri[0] + tri[2] > tri[1] &&
      tri[1] + tri[2] > tri[0]
      ? true
      : false;
  };

  const triArea = (tri) => {
    if (isTriangle(tri)) {
      const s = (tri[0] + tri[1] + tri[2]) / 2;
      return Math.sqrt(s * (s - tri[0]) * (s - tri[1]) * (s - tri[2]));
    }
  };

  if (isTriangle(tri) && isTriangle(hole)) {
    return triArea(hole) >= triArea(tri) ? true : false;
  } else return false;
}
exports.doesTriangleFit = doesTriangleFit;
