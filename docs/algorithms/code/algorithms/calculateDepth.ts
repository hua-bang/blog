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

// 迭代
function calculateDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  const stack = [root];

  let count = 0;

  while (stack.length) {
    let size = stack.length;
    count++;
    while (size) {
      const node = stack.shift();

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }

      size--;
    }
  }
  return count;
}

// 递归
function calculateDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return Math.max(calculateDepth(root.left), calculateDepth(root.right)) + 1;
}
