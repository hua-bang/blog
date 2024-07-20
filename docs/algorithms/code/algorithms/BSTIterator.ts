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

function getInOrderRes(root: TreeNode): number[] {
  const res: number[] = [];

  const stack: TreeNode[] = [];

  let current = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    res.push(current.val);
    current = current.right;
  }

  return res;
}

class BSTIterator {
  private arr: number[] = [];
  private index: number = -1;

  constructor(root: TreeNode | null) {
    if (!root) {
      this.arr = [];
      return;
    }

    this.arr = getInOrderRes(root);
  }

  next(): number {
    if (!this.arr.length) {
      return -1;
    }
    this.index = this.index === -1 ? 0 : this.index + 1;
    return this.arr[this.index];
  }

  hasNext(): boolean {
    if (!this.arr.length) {
      return false;
    }

    let nextIndex = this.index === -1 ? 0 : this.index + 1;
    return this.arr[nextIndex] !== undefined;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
