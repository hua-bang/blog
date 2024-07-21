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

function getMinimumDifference(root: TreeNode | null): number {
  const res: number[] = [];
  const stack: TreeNode[] = [];

  let current: TreeNode | null = root;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop()!;
    res.push(current.val);
    current = current.right;
  }

  let min = res[1] - res[0];

  for (let i = 2; i < res.length; i++) {
    min = Math.min(min, res[i] - res[i - 1]);
  }

  return min;
}
