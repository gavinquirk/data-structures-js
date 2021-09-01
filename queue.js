// Queue constructor
function Queue() {
  this.elements = [];
}

// Methods
Queue.prototype.enqueue = function (e) {
  this.elements.push(e);
};

Queue.prototype.dequeue = function () {
  return this.elements.shift();
};

Queue.prototype.isEmpty = function () {
  return this.elements.length == 0;
};

Queue.prototype.peek = function () {
  return !this.isEmpty() ? this.elements[0] : undefined;
};

Queue.prototype.length = function () {
  return this.elements.length;
};

// Create a new queue
let q = new Queue();

// Fill with array of numbers 1 - 7
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}

// Test methods
console.log('peek: ' + q.peek());
console.log('length: ' + q.length());
console.log('length: ' + q.length());
console.log('dequeueing all...');

while (!q.isEmpty()) {
  console.log(q.dequeue());
}
