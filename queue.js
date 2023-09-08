/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      // If the queue is empty, set both first and last to the new node
      this.first = newNode;
      this.last = newNode;
    } else {
      // Otherwise, update the last node's next to point to the new node
      this.last.next = newNode;
      // Update the last pointer to the new node
      this.last = newNode;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */
  dequeue() {
    if (!this.first) {
      throw new Error("Queue is empty");
    }
    const removedValue = this.first.val;
    this.first = this.first.next;
    this.size--;
    if (this.size === 0) {
      // If the queue becomes empty, also update the last pointer
      this.last = null;
    }
    return removedValue;
  }

  /** peek(): return the value of the first node in the queue. */
  peek() {
    if (!this.first) {
      throw new Error("Queue is empty");
    }
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
