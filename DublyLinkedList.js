const { parse, stringify, toJSON, fromJSON } = require("flatted");
const util = require("util");
class DublyNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new DublyNode(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  print() {
    let list = {
      head: null,
      tail: null,
      length: 0,
      data: {},
    };
    let nod = this.head;
    if (this.length > 0) {
      for (let i = 0; i < this.length; i++) {
        list.data[i] = {
          val: null,
          next: null,
          prev: null,
        };
        list.data[i].val = nod.val;
        if (nod.next) list.data[i].next = nod.next.val;
        if (nod.prev) list.data[i].prev = nod.prev.val;

        nod = nod.next;
      }
      list.length = this.length;
      list.head = this.head.val;
      list.tail = this.tail.val;
    }
    return list;
  }
}

////////////////
// qlet list = new DublyLinkedList();

// list.push(55);

// list.push(66);

// console.log(list.print());

exports.DublyLinkedList = DublyLinkedList;
