class CircularQueue {
  private queue: (number | null)[];
  private rear: number;
  private front: number;
  private size: number;
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.queue = new Array(capacity).fill(null);
    this.rear = -1;
    this.front = -1;
    this.size = 0;
  }

  enque(element: number): void {
    if (this.isFull()) {
      console.log("Queue Overflow");
      return;
    }

    if (this.front === -1) {
      this.front = 0;
    }

    this.rear = (this.rear + 1) % this.capacity;
    this.queue[this.rear] = element;
    this.size++;
  }

  deque(): number | null {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
      return null;
    }

    const removed = this.queue[this.front];
    this.queue[this.front] = null;

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.capacity;
    }

    this.size--;
    return removed;
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  display(): void {
    if (this.isEmpty()) {
      console.log("Queue is Empty");
      return;
    }

    let i = this.front;
    let result = "";
    while (true) {
      result += this.queue[i] + " ";
      if (i === this.rear) break;
      i = (i + 1) % this.capacity;
    }
    console.log(result.trim());
  }
}

const cQue = new CircularQueue(5);
cQue.enque(12);
cQue.enque(13);
cQue.enque(14);
cQue.enque(16);
cQue.deque();
cQue.enque(99);
cQue.display();
