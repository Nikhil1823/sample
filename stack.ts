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

const stack1 = new Stack(["apple"]);
stack1.push("orange");
stack1.push("pineapple");
stack1.display();
stack1.pop();
stack1.push("almond");
stack1.display();
