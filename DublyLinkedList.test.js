const { test, expect, it } = require("@jest/globals");
const { DublyLinkedList } = require("./DublyLinkedList");

test("Push Into empty List", () => {
  let list = new DublyLinkedList();
  list.push(55);
  expect(list.print()).toEqual({
    head: 55,
    tail: 55,
    length: 1,
    data: { 0: { val: 55, next: null, prev: null } },
  });
  list.push(66);
  expect(list.print()).toEqual({
    head: 55,
    tail: 66,
    length: 2,
    data: {
      0: { val: 55, next: 66, prev: null },
      1: { val: 66, next: null, prev: 55 },
    },
  });
});
