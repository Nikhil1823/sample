const queue = () => {};

class Queue {
  private queue: string[];
  constructor(array: string[]) {
    this.queue = array;
  }
  enque(val: string) {
    this.queue.push(val);
  }

  deques() {
    this.queue.pop();
  }
  display() {
    for (const ele of this.queue) {
      console.log(ele);
    }
  }
}

const queue1 = new Queue([]);
queue1.enque("10");
queue1.display();
