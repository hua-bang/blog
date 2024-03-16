class MinHeap {
  private heap: number[];
  private capacity: number;
  private size: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.heap = new Array(capacity).fill(0);
  }

  private parent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  // 获取左子节点的索引
  private leftChild(i: number): number {
    return 2 * i + 1;
  }

  // 获取右子节点的索引
  private rightChild(i: number): number {
    return 2 * i + 2;
  }

  // 交换堆中的两个元素
  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  private heapifyDown(index: number): void {
    let smallest = index;
    const left = this.leftChild(index);
    const right = this.rightChild(index);

    if (left < this.size && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < this.size && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  private heapifyUp(index: number): void {
    let current = index;
    let parentIndex = this.parent(current);

    while (current > 0 && this.heap[current] < this.heap[parentIndex]) {
      this.swap(current, parentIndex);
      current = parentIndex;
      parentIndex = this.parent(current);
    }
  }

  public insert(key: number): void {
    if (this.size === this.capacity) {
      throw new Error("Heap is full");
    }

    this.heap[this.size] = key;
    this.size++;
    this.heapifyUp(this.size - 1);
  }

  public extractMin(): number {
    if (this.size === 0) {
      throw new Error("Heap is empty");
    }
    const root = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.size--;
    this.heapifyDown(0);
    return root;
  }

  // 使用给定数组构建最小堆
  public buildHeap(keys: number[]): void {
    if (keys.length > this.capacity) {
      throw new Error("Array larger than capacity");
    }

    this.size = keys.length;
    this.heap = keys.slice(); // 复制数组

    // 从最后一个非叶子节点开始向下调整
    for (let i = this.parent(this.size - 1); i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // 使用堆排序算法对元素进行排序
  public heapSort(): number[] {
    const result: number[] = [];
    const originalSize = this.size;

    while (this.size > 0) {
      result.push(this.extractMin()); // 依次取出并删除最小元素
    }

    this.size = originalSize; // 恢复堆的原始大小
    return result;
  }
}

const minHeap = new MinHeap(10);
minHeap.insert(3);
minHeap.insert(2);
minHeap.insert(15);
minHeap.insert(5);
minHeap.insert(4);
minHeap.insert(45);

console.log("Extracted Min:", minHeap.extractMin());
console.log("Heap after extracting min:", minHeap.heapSort());
