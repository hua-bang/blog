class CircularQueue<T extends any> {
  private queue: T[];
  private head: number = 0;
  private tail: number = 0;
  private count: number = 0;
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.queue = new Array<T>(capacity);
  }

  enqueue(element: T) {
    if (this.isFull()) {
      console.log("Queue is Full");
      return false;
    }

    this.queue[this.tail] = element;
    this.tail = (this.tail + 1) % this.capacity;
    this.count++;
    return true;
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const element = this.queue[this.head];
    this.head = (this.head + 1) % this.capacity;
    this.count--;
    return element;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.capacity;
  }

  size(): number {
    return this.count;
  }
}
