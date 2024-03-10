class Queue<T extends any> {
  values: T[] = [];

  constructor(values?: T[]) {
    if (values) {
      this.values = values;
    }
  }

  enqueue(value: T) {
    this.values.push(value);
  }

  dequeue() {
    return this.values.shift();
  }

  isEmpty() {
    return this.values.length === 0;
  }
}
