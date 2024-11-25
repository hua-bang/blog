class MinStack {
  private arr: number[] = [];
  private minArr: number[] = [];

  constructor() {

  }

  push(val: number): void {
    this.arr.push(val);
    if (this.minArr.length === 0) {
      this.minArr.push(val);
      return;
    }

    if (this.minArr[this.minArr.length - 1] >= val) {
      this.minArr.push(val);
    }
  }

  pop(): void {
    const val = this.arr.pop();
    if (val === this.minArr[this.minArr.length - 1]) {
      this.minArr.pop();
    }
  }

  top(): number {
    if (!this.arr.length) {
      return -1;
    }
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    if (!this.minArr.length) {
      return -1;
    }
    return this.minArr[this.minArr.length - 1];
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