class QueueUsingStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  // Add an element to the queue
  enqueue(element) {
    this.stack1.push(element);
  }

  // Remove and return the first element of the queue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    // If stack2 is empty, transfer elements from stack1 to stack2
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop);
      }
    }
    return this.stack2.pop();
  }

  // Return the first element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.stack1.length + this.stack2.length;
  }
}

const queue = new QueueUsingStacks();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.size()); // Output: 2

queue.enqueue(4);
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: false
