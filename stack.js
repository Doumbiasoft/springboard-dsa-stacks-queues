/** Node: node for a stack. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */
class Stack {
  constructor() {
    this.first = null; // The top of the stack
    this.size = 0;    // Number of elements in the stack
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      // If the stack is empty, set the new node as the first node
      this.first = newNode;

    } else {
      // If the stack is not empty, link the new node to the current first node
      newNode.next = this.first;
      this.first = newNode;

    }
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */
  pop() {
    if (!this.first) {
      throw new Error("Stack is empty");
    }
    const poppedValue = this.first.val;
    this.first = this.first.next;
    this.size--;
    return poppedValue;
  }

  /** peek(): return the value of the first node in the stack. */
  peek() {
    if (!this.first) {
      return null; // Stack is empty
    }
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */
  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
