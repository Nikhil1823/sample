class Stack {
  private stack: string[] | number[] = [];
  constructor(data: string[] | number[]) {
    this.stack = data;
  }
  push(element: string | number) {
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
