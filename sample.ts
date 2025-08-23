class Queue {
  private queue: string[];
  constructor(array: string[]) {
    this.queue = array;
  }
  enque(val: string) {
    this.queue.push(val);
  }

  deques() {
    this.queue.shift();
  }
  display() {
    for (const ele of this.queue) {
      console.log(ele);
    }
  }
}

const queue1: Queue = new Queue([]);
queue1.enque("10");
queue1.enque("20");
queue1.enque("30");
queue1.enque("40");
queue1.enque("50");
queue1.deques();
queue1.enque("60");
queue1.display();
