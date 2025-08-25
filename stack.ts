class Stack {
  private stack: string[] = [];
  constructor(data: string[]) {
    this.stack = data;
  }
  push(element: string) {
    this.stack.push(element);
  }
  pop() {
    if (this.stack.length <= 0) return;
    this.stack.pop();
  }
  display(): void {
    for (const element of this.stack) {
      console.log(element);
    }
  }
}

