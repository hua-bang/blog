class MinStack {
  private arr: Array<number>;

  constructor() {
    this.arr = [];
  }

  push(val: number): void {
    this.arr.push(val);
  }

  pop(): void {
    this.arr.pop();
  }

  top(): number {
    if (!this.arr.length) {
      return null;
    }
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    if (!this.arr.length) {
      return null;
    }

    return Math.min(...this.arr);
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
