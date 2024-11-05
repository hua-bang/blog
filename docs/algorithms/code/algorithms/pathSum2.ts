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

function getPathSumCount(root: TreeNode | null, targetSum: number, prefix: number) {
  if (!root) {
    return 0;
  }

  let count = 0;
  const val = prefix + root.val;
  if (val === targetSum) {
    count = count + 1;
  }

  count = root.left ? count + getPathSumCount(root.left, targetSum, val) : count;
  count = root.right ? count + getPathSumCount(root.right, targetSum, val) : count;
  return count;
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }

  let count = getPathSumCount(root, targetSum, 0);

  return count + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};