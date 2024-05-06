---
title: 队列
customTag: algorithms>数据结构
date: 2024.04.01
editLink: true
---

# 队列

队列（Queue）是一种基于元素处理顺序的线性数据结构，主要包括两种形式：**标准队列**、**优先级队列**、**循环队列**。

- **标准队列**：遵循先进先出（First In First Out, FIFO）的原则，进行元素的添加（入队 enqueue）和移除（出队 dequeue）操作；
- **优先级队列**：则按照元素的优先级来确定出队顺序，不严格遵守 FIFO 原则。队列在数据处理、任务调度等多种场景下都非常有用，优先级队列特别适用于需要根据优先级处理元素的场合。
- **循环队列（Circular Queue）**：循环队列是一种利用固定大小的数组以循环方式存储队列元素的数据结构。当队列满时，新的元素将被写入到数组的开始位置（如果那里有空间）。这种方法有效地利用了数组的空间，避免了在队列未满时由于“假溢出”而不能添加新元素的问题。
  ![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240310102929.png)

## 标准队列

遵循先进先出（First In First Out, FIFO）的原则，进行元素的添加（入队 enqueue）和移除（出队 dequeue）操作；

```ts
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
```

## 优先级队列

优先级队列按照元素的优先级来确定出队顺序，不严格遵守 FIFO 原则。

即会有一个字段表示优先级，来进行出栈/入栈的顺序。

```ts
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
      if (priority < this.elements[i].priority) {
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
```

## 循环队列

循环队列（Circular Queue）是一种使用有限数组存储元素的数据结构，通过有效地利用数组空间来模拟队列操作。

在循环队列中，当达到数组的末尾时，下一个元素的插入会回到数组的开始，前提是那个位置现在是空的。这种结构非常适用于有固定缓冲大小需求的场景，因为它可以避免常规队列在未满时因为“前端”空间无法使用而进行不必要的数据移动或空间浪费。

```ts
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
```
