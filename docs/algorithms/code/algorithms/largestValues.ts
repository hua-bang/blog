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

function largestValues(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const stack: TreeNode[] = [root];
  const res: number[] = [];

  while (stack.length) {
    let size = stack.length;
    let max = -Infinity;

    while (size--) {
      const node = stack.shift();
      max = node.val > max ? node.val : max;
      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }
    }

    res.push(max);
  }

  return res;
};