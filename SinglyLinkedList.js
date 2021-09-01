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
  insert(idx, val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    if ((idx < 0) | (idx > this.length) | isNaN(idx)) return false;
    if (idx === 0) {
      this.unSift(val);
    } else if (this.head == null) {
      this.push(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let temp = this.get(idx - 1);
      newNode.next = temp.next;
      temp.next = newNode;
      this.length++;
    }
    return newNode;
  }
  remove(idx) {
    if ((idx < 0) | (idx >= this.length) | isNaN(idx)) return false;
    if (idx === 0) {
      this.shift();
    } else if (idx === this.length - 1) {
      this.pup();
    } else {
      let temp = this.get(idx - 1);
      let result = temp.next;
      temp.next = temp.next.next;
      this.length--;
      return result;
    }
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next = null,
      prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }
}

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

// console.log(
//   util.inspect(list.unSift(33), false, null, true /* enable colors */)
// );
// console.log(util.inspect(list, false, null, true /* enable colors */));
// console.log(
//   util.inspect(list.unSift(44), false, null, true /* enable colors */)
// );
// console.log(util.inspect(list, false, null, true /* enable colors */));
// console.log(util.inspect(list.unSift(), false, null, true /* enable colors */));
// console.log(util.inspect(list, false, null, true /* enable colors */));

// console.log(
//   util.inspect(list.unSift("Mohammed"), false, null, true /* enable colors */)
// );
// console.log(
//   util.inspect(list.unSift("Do Do Do"), false, null, true /* enable colors */)
// );
// console.log(util.inspect(list, false, null, true /* enable colors */));
// console.log(list.get(-1));

// console.log(list.get("yt"));
// console.log(list.get("@"));
// //console.log(list.get(3));

// //console.log(list.get(1));
// //console.log(list.get(0));
// console.log("-----------------Set -----------------");
// console.log(list.set(0, 1));
// console.log(list.set(1, 2));
// console.log(list.set(2, 3));
// console.log(list.set(3, 4));
// console.log(list.set(5, 4));
// console.log(list.set("dfd", 4));
// console.log(list.set(-1, 4));
// console.log(util.inspect(list, false, null, true /* enable colors */));
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
//list.insert(3, 6);

console.log(util.inspect(list, false, null, true /* enable colors */));

// console.log("-------------------Get begin-----------------");
// console.log(list.get(2));
// console.log("--------------------get end-------------------");
// list.insert(4, 7);
// //console.log(util.inspect(list, false, null, true /* enable colors */));
// list.insert(7, 8);
// //
// console.log(list.insert(0, 9));
// console.log(util.inspect(list, false, null, true /* enable colors */));
console.log("-----------------------------------------------");
// console.log(list.insert(1, 1111));
// console.log(util.inspect(list, false, null, true /* enable colors */));

//console.log(util.inspect(list.get(1), false, null, true /* enable colors */));
list.remove(3);
console.log("-----------------------------------------------");
console.log(util.inspect(list, false, null, true /* enable colors */));
console.log(JSON.stringify(list));
console.table(list);

list.reverse();
console.log(util.inspect(list, false, null, true /* enable colors */));

/*
Head             Tail
  12  34  67  43  32

  temp
   32
  Head            Tail
                   12
  Head            Tail
   32              12


   


*/
