class MinStack {
  arr: number[] = [];
  mins: number[] = [];
  constructor() {
    
  }

  push(val: number): void {
    this.arr.push(val);
    if(!this.mins.length || val <= this.mins[this.mins.length - 1]) {
      this.mins.push(val);
    }
  }

  pop(): void {
    if (!this.arr.length) {
      return;
    }

    const val = this.arr.pop();
    if(val === this.mins[this.mins.length - 1]) {
      this.mins.pop();
    }
  }

  top(): number {
    if (!this.arr.length) {
      return -1;
    }
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    if (!this.arr.length) {
      return -1;
    }
    return this.mins[this.mins.length - 1];
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