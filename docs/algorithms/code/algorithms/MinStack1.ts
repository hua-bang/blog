class MinStack {
  arr: number[] = [];
  minStack: number[] = [];
  constructor() {}

  push(x: number): void {
    this.arr.push(x);
    if (this.minStack.length) {
      if (this.minStack[this.minStack.length - 1] >= x) {
        this.minStack.push(x);
      }
    } else {
      this.minStack.push(x);
    }
  }

  pop(): void {
    if (!this.arr.length) {
      return;
    }

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
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
