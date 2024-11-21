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

function getPathNum(root: TreeNode | null, targetSum: number, prefix: number) {
  if (!root) {
    return 0;
  }

  const val = root.val + prefix;
  let count = 0;
  if (val === targetSum) {
    count++;
  }

  if (root.left) {
    count = count + getPathNum(root.left, targetSum, val);
  }

  if (root.right) {
    count = count + getPathNum(root.right, targetSum, val);
  };

  return count;
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }

  return getPathNum(root, targetSum, 0) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};