class CircularQueue {
  private queue;
  private rear;
  private front;
  private size;
  private capacity;
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = new Array(capacity).fill(null);
    this.rear = -1;
    this.front = -1;
  }

  enque(element: number) {
    if (this.isFull()) {
      console.log("queue overflows");
      return;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = element;
    this.size++;
  }
  deque() {
    if (this.isEmpty()) {
      console.log("Queue underflows");
      return;
    }

    this.front = (this.front + 1) % this.capacity;
    this.queue[this.front] = null;
    if (this.front == this.rear) {
      this.front = -1;
      this.rear = -1;
      this.size--;
    }
  }

  isFull() {
    return this.capacity == this.size;
  }
  isEmpty() {
    return this.front == -1;
  }

  display() {
    for (let i = this.front; i < this.rear; i++) {
      if (this.queue[i]) console.log(this.queue[i]);
    }
  }
}

const cQue = new CircularQueue([]);
cQue.enque(12);
cQue.enque(13);
cQue.enque(14);
cQue.enque(16);
cQue.deque();
cQue.display();
