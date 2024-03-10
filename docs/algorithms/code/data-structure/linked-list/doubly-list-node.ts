class DoublyListNode<T> {
  private value: T;
  next: DoublyListNode<T> | null = null;
  prev: DoublyListNode<T> | null = null; // 新增的前驱节点引用

  constructor(value: T, next?: DoublyListNode<T>, prev?: DoublyListNode<T>) {
    this.value = value;
    if (next) {
      this.next = next;
    }
    if (prev) {
      this.prev = prev;
    }
  }

  getValue() {
    return this.value;
  }
}

const node1 = new DoublyListNode(1);
const node2 = new DoublyListNode(2);

node1.next = node2;
node2.prev = node1; // 设置node2的前驱节点为node1
