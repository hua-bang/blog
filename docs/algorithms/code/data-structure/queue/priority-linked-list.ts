interface PriorityQueueItem<T> {
  value: T;
  priority: number;
  next: PriorityQueueItem<T> | null;
}

class PriorityQueue<T> {
  private head: PriorityQueueItem<T> | null = null;

  enqueue(value: T, priority: PriorityQueueItem<T>["priority"]) {
    const element: PriorityQueueItem<T> = {
      value,
      priority,
      next: null,
    };

    if (!this.head || this.head.priority > priority) {
      element.next = this.head;
      this.head = element;

      return;
    }

    let current = this.head;

    while (current.next && current.next.priority <= priority) {
      current = current.next;
    }

    element.next = current;
    current = element;
  }

  dequeue(): T | null {
    if (!this.head) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
}
