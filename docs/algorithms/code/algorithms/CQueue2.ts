class CQueue {
  private arr: number[] = [];
  constructor() {
    this.arr = [];
  }

  appendTail(value: number): void {
    this.arr.push(value);
  }

  deleteHead(): number {
    if (this.arr.length === 0) {
      return -1;
    }

    return this.arr.shift();
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */