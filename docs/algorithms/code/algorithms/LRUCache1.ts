class LRUCache {
  map: Record<number, number> = {};
  capacity: number;
  usedQueue: number[] = [];

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  active(key: number) {
    const usedQueue = this.usedQueue.filter(item => item !== key);
    if (usedQueue.length < this.capacity) {
      usedQueue.push(key);
      this.usedQueue = usedQueue;
      return;
    }

    const [first, ...restUsedQueue] = usedQueue;
    delete this.map[first];
    this.usedQueue = [...restUsedQueue, key];
  }

  get(key: number): number {
    if (this.map[key] === undefined) {
      return -1;
    }
    this.active(key);
    return this.map[key];
  }

  put(key: number, value: number): void {
    this.active(key);
    this.map[key] = value;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */