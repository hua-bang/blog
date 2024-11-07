class MinStack {
  private arr: number[] = [];
  private minStack: number[] = [];

  constructor() {
  }

  push(val: number): void {
    this.arr.push(val);
    if (this.minStack.length === 0) {
      this.minStack.push(val);
      return;
    }
    if (this.minStack[this.minStack.length - 1] >= val) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    const val = this.arr.pop();
    if (val === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */