class Checkout {
  arr: number[] = [];
  maxQueue: number[] = [];
  constructor() {}

  get_max(): number {
    if (!this.maxQueue.length) {
      return -1;
    }

    return this.maxQueue[0];
  }

  add(value: number): void {
    this.arr.push(value);

    while (
      this.maxQueue.length &&
      this.maxQueue[this.maxQueue.length - 1] < value
    ) {
      this.maxQueue.pop();
    }
    this.maxQueue.push(value);
  }

  remove(): number {
    if (!this.arr.length) {
      return -1;
    }

    const val = this.arr.shift();
    if (val === this.maxQueue[0]) {
      this.maxQueue.shift();
    }
    return val;
  }
}

/**
 * Your Checkout object will be instantiated and called as such:
 * var obj = new Checkout()
 * var param_1 = obj.get_max()
 * obj.add(value)
 * var param_3 = obj.remove()
 */
