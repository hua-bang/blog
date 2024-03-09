class SinglyListNode<T extends any> {
  private value: T;
  next: SinglyListNode<T> | null = null;

  constructor(value: T, next?: SinglyListNode<T>) {
    this.value = value;

    if (next) {
      this.next = next;
    }
  }

  getValue() {
    return this.value;
  }
}

const node1 = new SinglyListNode(1);
const node2 = new SinglyListNode(2);

node1.next = node2;
