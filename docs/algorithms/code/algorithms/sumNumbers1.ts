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

function sumNumbers(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  let sum = 0;

  const dfs = (node: TreeNode | null, num?: number) => {
    if (!node) {
      return;
    }

    const nextNum = num * 10 + node.val;
    if (!node.left && !node.right) {
      sum += nextNum;
    } else {
      dfs(node.left, nextNum);
      dfs(node.right, nextNum);
    }
  }

  dfs(root, 0);
  return sum;
};