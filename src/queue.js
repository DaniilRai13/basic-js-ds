const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  getUnderlyingList() {
    return this.head
  }

  enqueue(k) {
    let listNode = new ListNode(k)

    if (this.length === 0) {
      this.head = listNode;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = new ListNode(k);
    }
    if(k === null) reutrn
    this.length++;
    this.tail = new ListNode(k)
    
  }
  dequeue() {
    if (this.length!==0) {
      let firstValue = this.head.value
      this.head = this.head.next
      return firstValue

    }
  }
}

let q = new Queue()
// console.log(q.enqueue(5))
// console.log(q.enqueue(10))
// console.log(q.dequeue())
// console.log(q.enqueue(77))

// // console.log(q.enqueue(1))
// console.log(q.getUnderlyingList())



module.exports = {
  Queue
};
