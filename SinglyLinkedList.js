const util = require("util");
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    if (val) {
      var newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.length++;
      return this.tail.val;
    }
  }

  pup() {
    if (this.head) {
      let result = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let beforeLast = this.head,
          current = this.head;
        while (current.next) {
          beforeLast = current;
          current = current.next;
        }
        beforeLast.next = null;
        this.tail = beforeLast;
      }
      this.length--;
      return result.val;
    }
    return;
  }
  shift() {
    if (this.length === 0) return;
    let result = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return result.val;
  }
  unSift(val) {
    if (val) {
      let newHead = new Node(val);
      newHead.next = this.head;
      this.head = newHead;
      this.length++;
      if (this.length === 1) this.tail = newHead;
      return val;
    } else return;
  }
  get(idx) {
    if ((idx >= this.length) | (idx < 0) | isNaN(idx)) {
      return null;
    } else {
      if (idx === 0) return this.head;
      if (idx === this.length - 1) return this.tail;
      let tempNode = this.head;
      for (let i = 0; i < this.length; i++) {
        tempNode = tempNode.next;
        if (i === idx - 1) return tempNode;
      }
    }
  }
  set(idx, val) {
    let temp = this.get(idx);
    if (temp) {
      temp.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {}
  remove(idx) {}
  reverse() {}
}

// var start = new Date()
// var simulateTime = 1000

// setTimeout(
// function addItems(i) {
//   const list = new SinglyLinkedList();
//   for (i = 1; i < 100001; i++) list.push(i);
// }

// addItems(1000000000);

const list = new SinglyLinkedList();
// console.log("Add null to the list " + list.pup());
// console.log(
//   "After add null to the list " +
//     util.inspect(list, false, null, true /* enable colors */)
// );
// console.log(util.inspect(list.push(33), false, null, true /* enable colors */));

// console.log(
//   "After add 33 to the list " +
//     util.inspect(list, false, null, true /* enable colors */)
// );
// list.push(44);
// console.log(util.inspect(list, false, null, true /* enable colors */));
// list.push(55);
// console.log(util.inspect(list, false, null, true /* enable colors */));
// list.push(66);
// console.log(util.inspect(list, false, null, true /* enable colors */));

// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);
// console.log(list.shift());
// console.log(list);

// console.log(util.inspect(list, false, null, true /* enable colors */));
// console.log(list.pup());
// console.log(util.inspect(list, false, null, true /* enable colors */));
// console.log(list.pup());
// console.log(util.inspect(list, false, null, true /* enable colors */));
// console.log(list.pup());
// console.log(util.inspect(list, false, null, true /* enable colors */));
// //list.pup();
// console.log(list.pup());
// console.log(util.inspect(list, false, null, true /* enable colors */));
// console.log(list.pup());
// console.log(util.inspect(list, false, null, true /* enable colors */));

console.log(
  util.inspect(list.unSift(33), false, null, true /* enable colors */)
);
console.log(util.inspect(list, false, null, true /* enable colors */));
console.log(
  util.inspect(list.unSift(44), false, null, true /* enable colors */)
);
console.log(util.inspect(list, false, null, true /* enable colors */));
console.log(util.inspect(list.unSift(), false, null, true /* enable colors */));
console.log(util.inspect(list, false, null, true /* enable colors */));

console.log(
  util.inspect(list.unSift("Mohammed"), false, null, true /* enable colors */)
);
console.log(
  util.inspect(list.unSift("Do Do Do"), false, null, true /* enable colors */)
);
console.log(util.inspect(list, false, null, true /* enable colors */));
console.log(list.get(-1));

console.log(list.get("yt"));
console.log(list.get("@"));
//console.log(list.get(3));
console.log(list.get(2));
//console.log(list.get(1));
//console.log(list.get(0));
console.log("-----------------Set -----------------");
console.log(list.set(0, 1));
console.log(list.set(1, 2));
console.log(list.set(2, 3));
console.log(list.set(3, 4));
console.log(list.set(5, 4));
console.log(list.set("dfd", 4));
console.log(list.set(-1, 4));
console.log(util.inspect(list, false, null, true /* enable colors */));