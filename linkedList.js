function createNode(value) {
  return {
    value,
    next: null,
  };
}

function createdLinkedList() {
  return {
    head: null,
    tail: null,
    length: 0,

    insert(value) {
      const node = createNode(value);

      if (this.head === null) {
        this.head = node; // { value, next: null }
        this.tail = node; // { value, next: null }
        this.length++;

        return node;
      }
      this.tail.next = node; // andd node to next { value: netx: null } to next:
      this.head = node;
      this.length++;
    },
    pop() {
      if (this.isEmpty()) {
        return null;
      }

      const node = this.tail;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }
    },

    isEmpty() {
      return this.length === 0;
    },
  };
}

const list = createdLinkedList();
const values = ["a", "b", "c", "d", "e"];
//
const nodes = values.map((val) => list.insert(val));

// list.pop();
// console.log(list.delete(1));
console.log(list.print());

// exports.createNode = createNode;
// exports.createLinkedList = createLinkedList;

// const list = {
//     head: {
//         value: 6
//         next: {
//             value: 10
//             next: {
//                 value: 12
//                 next: {
//                     value: 3
//                     next: null
//                     }
//                 }
//             }
//         }
//     }
// };
