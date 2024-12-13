/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getInOrderTree(root: TreeNode): number[] {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }

  return res;
}

class BSTIterator {
  private arr: number[] = [];
  private index: number = -1;
  constructor(root: TreeNode | null) {
    this.arr = getInOrderTree(root);
  }

  next(): number {
    if (this.index >= this.arr.length) {
      return -1;
    }
    const nextIndex = this.index === -1 ? 0 : this.index + 1;
    this.index = nextIndex;
    return this.arr[nextIndex];
  }

  hasNext(): boolean {
    return this.index < this.arr.length - 1;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */