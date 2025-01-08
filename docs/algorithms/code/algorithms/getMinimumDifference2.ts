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
// 思路：先用中序遍历组合成数组，然后做遍历

function getMinimumDifference(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
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

  let min = Infinity;

  for (let i = 1; i < res.length; i++) {
    min = Math.min(min, res[i] - res[i - 1]);
  }

  return min;
};