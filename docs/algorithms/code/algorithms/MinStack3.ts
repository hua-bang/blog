class MinStack {
  private arr: number[] = [];
  private minArr: number[] = [];
  constructor() {}

  push(x: number): void {
    this.arr.push(x);
    if (!this.minArr.length) {
      this.minArr.push(x);
      return;
    }

    if (this.minArr[this.minArr.length - 1] >= x) {
      this.minArr.push(x);
    }
  }

  pop(): void {
    const val = this.arr.pop();
    if (val === this.minArr[this.minArr.length - 1]) {
      this.minArr.pop();
    }
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    return this.minArr[this.minArr.length - 1];
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
