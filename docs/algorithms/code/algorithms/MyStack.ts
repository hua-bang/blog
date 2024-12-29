class MyStack {
  private queueIn: number[] = [];
  private queueOut: number[] = [];

  push(x: number): void {
    this.queueIn.unshift(x);

    while (this.queueIn.length) {
      this.queueOut.unshift(
        this.queueIn.shift()
      )
    }
  }

  pop(): number {
    return this.queueOut.shift();
  }

  top(): number {
    const val = this.pop();
    this.queueOut.unshift(val);
    return val;
  }

  empty(): boolean {
    return !this.queueIn.length && !this.queueOut.length;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */