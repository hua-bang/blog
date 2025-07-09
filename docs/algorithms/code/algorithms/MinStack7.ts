class MinStack {

  private arr: number[] = [];
  private minArr: number[] = [];
  constructor() {

  }

  push(x: number): void {
    this.arr.push(x);
    if (this.minArr.length === 0) {
      this.minArr.push(x);
      return
    }

    if (this.minArr[this.minArr.length - 1] >= x) {
      this.minArr.push(x);
    }
  }

  pop(): void {
    if (this.arr.length === 0) {
      return;
    }
    const res = this.arr.pop();

    if (this.minArr[this.minArr.length - 1] === res) {
      this.minArr.pop();
    }
  }

  top(): number {
    if (this.arr.length === 0) {
      return -1;
    }
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    if (this.minArr.length === 0) {
      return -1;
    }
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