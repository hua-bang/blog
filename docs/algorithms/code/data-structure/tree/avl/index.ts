class AVLNode {
  public height: number;
  public left: AVLNode | null;
  public right: AVLNode | null;

  constructor(public value: number) {
    this.height = 1; // 新插入的节点的高度设置为1
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  private root: AVLNode | null;

  constructor() {
    this.root = null;
  }

  insert(value: number) {
    this.root = this.insertNode(this.root, value);
  }

  private getHeight(node: AVLNode | null): number {
    if (node === null) return 0;
    return node.height;
  }

  private getBalance(node: AVLNode): number {
    if (node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  insertNode(node: AVLNode | null, value: number): AVLNode {
    if (node === null) {
      return new AVLNode(value);
    }

    // 这里一定找的是最小不平衡子树，可以理解为堆栈
    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.insertNode(node.right, value);
    } else {
      // 相同的值不需要再插入
      return node;
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    // 获取平衡因子，检查这个节点是否失去平衡
    let balanceFactor = this.getBalance(node);

    // 左左情况
    if (balanceFactor > 1 && value < node.left!.value) {
      // 需要右旋
      return this.rightRotate(node);
    }

    // 右右情况
    if (balanceFactor < -1 && value > node.right!.value) {
      return this.leftRotate(node);
    }

    // 左右情况
    if (balanceFactor > 1 && value > node.left!.value) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }

    // 右左情况
    if (balanceFactor < -1 && value < node.right!.value) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    return node; // 返回未修改的节点
  }

  rightRotate(y: AVLNode): AVLNode {
    let x = y.left!;
    let temp2 = x.right;

    x.right = y;
    y.left = temp2;

    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    // 返回新的根节点
    return x;
  }

  leftRotate(x: AVLNode): AVLNode {
    let y = x.right!;
    let t2 = y.left;

    y.left = x;
    x.right = t2;

    // 更新高度
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    // 返回新的根节点
    return y;
  }

  findNode(node: AVLNode | null, value: number): AVLNode | null {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      return this.findNode(node.left, value);
    } else if (value > node.value) {
      return this.findNode(node.right, value);
    } else {
      return node;
    }
  }

  private getMinValueNode(node: AVLNode): AVLNode {
    let current = node;
    while (current.left != null) {
      current = current.left;
    }
    return current;
  }

  delete(value: number): void {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(node: AVLNode | null, value: number): AVLNode | null {
    if (!node) {
      return node;
    }

    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (!node.left || !node.right) {
        node = node.left || node.right;
      } else {
        let temp = this.getMinValueNode(node.right);
        node.value = temp.value;
        node.right = this.deleteNode(node.right, temp.value);
      }
    }

    if (!node) {
      return node;
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    let balance = this.getBalance(node);

    if (balance > 1 && this.getBalance(node.left!) >= 0) {
      return this.rightRotate(node);
    }

    if (balance > 1 && this.getBalance(node.left!) < 0) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node);
    }

    if (balance < -1 && this.getBalance(node.right!) <= 0) {
      return this.leftRotate(node);
    }

    if (balance < -1 && this.getBalance(node.right!) > 0) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node);
    }

    return node;
  }
}
