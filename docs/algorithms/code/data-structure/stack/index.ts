class Stack<T = any> {
  list: T[] = [];

  constructor(list?: T[]) {
    if (list) {
      this.list = list;
    }
  }

  push(val: T) {
    this.list.push(val);
  }

  pop() {
    return this.list.pop();
  }

  size(): number {
    return this.list.length;
  }

  top(): T | undefined {
    return this.list[this.list.length - 1];
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }
}
