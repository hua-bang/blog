interface PriorityQueueItem<T> {
  value: T;
  priority: number;
}

class PriorityQueue<T> {
  private elements: Array<PriorityQueueItem<T>> = [];

  enqueue(value: T, priority: PriorityQueueItem<T>["priority"]) {
    const element: PriorityQueueItem<T> = {
      value,
      priority,
    };

    let added = false;

    for (let i = 0; i < this.elements.length; i++) {
      if (priority > this.elements[i].priority) {
        this.elements.splice(i, 0, element);
        added = true;
        break;
      }
    }

    if (!added) {
      this.elements.push(element);
    }
  }

  dequeue(): T | undefined {
    if (this.elements.length === 0) {
      return undefined;
    }

    return this.elements.shift()?.value;
  }
}
