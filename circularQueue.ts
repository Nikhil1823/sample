class CircularQueue {
  private queue;
  private rear = 0;
  private front = -1;
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
  display() {
    for (let i = this.front; i < this.rear; i++) {
      console.log(this.queue[i]);
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
