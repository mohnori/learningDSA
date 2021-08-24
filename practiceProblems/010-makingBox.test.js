const { test, expect } = require("@jest/globals");
const { makeBox, makeArr, makeMatrix } = require("./010-makingBox");

test("Make normal array ", () => {
  expect(makeArr(5)).toEqual(["#####", "#   #", "#   #", "#   #", "#####"]);
});

test("Drow Box 5 ", () => {
  expect(makeBox(5)).toBe(
    "[\n" +
      '"#####"' +
      ",\n" +
      '"#   #",' +
      "\n" +
      '"#   #",' +
      "\n" +
      '"#   #",' +
      "\n" +
      '"#####"' +
      "\n" +
      "]"
  );
});

test("Drow Box 6", () => {
  expect(makeBox(6)).toBe(
    "[\n" +
      '"######"' +
      ",\n" +
      '"#    #",' +
      "\n" +
      '"#    #",' +
      "\n" +
      '"#    #",' +
      "\n" +
      '"#    #",' +
      "\n" +
      '"######"' +
      "\n" +
      "]"
  );
});

test("Drow Box 4 ", () => {
  expect(makeBox(4)).toBe(
    "[\n" +
      '"####"' +
      ",\n" +
      '"#  #",' +
      "\n" +
      '"#  #",' +
      "\n" +
      '"####"' +
      "\n" +
      "]"
  );
});

test("Drow Box 3 ", () => {
  expect(makeBox(3)).toBe(
    "[\n" + '"###"' + ",\n" + '"# #",' + "\n" + '"###"' + "\n" + "]"
  );
});

test("Drow Box 2 ", () => {
  expect(makeBox(2)).toBe("[\n" + '"##"' + ",\n" + '"##"' + "\n" + "]");
});

test("Drow Box 1 ", () => {
  expect(makeBox(1)).toBe("[\n" + '"#"' + "\n" + "]");
});
