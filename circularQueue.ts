class CircularQueue {
  private queue;
  private rear = 0;
  private front;
  private size = 5;
  constructor(array) {
    this.queue = array;
  }

  enque(element: number) {
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = element;
  }
  deque() {
    this.front = (this.front + 1) % this.size;
    this.queue[this.front] = null;
  }
}
