---
title: 栈
customTag: algorithms>数据结构
editLink: true
---

# 栈

在计算机科学中, 一个  **栈(stack)**  是一种抽象数据类型,用作表示元素的集合,具有两种主要操作:

- **push**, 添加元素到栈的顶端(末尾)， 即入栈;
- **pop**, 移除栈最顶端(末尾)的元素，即出栈；

以上两种操作可以简单概括为“**后进先出(LIFO = last in, first out)**”。

我们把允许插入和删除的一端称为栈顶（top），另一端称为栈底（bottom），不含任何数据元素的栈称为**空栈**。

![image.png](https://raw.githubusercontent.com/hua-bang/assert-store/master/20240311220700.png)

```typescript
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
```
