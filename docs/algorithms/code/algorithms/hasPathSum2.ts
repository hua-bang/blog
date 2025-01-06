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

// 概述：需要找到从根节点到叶子节点的路径，使得路径上的节点值之和等于目标值
// 思路：通过 DFS 去做往下递归，分两种情况
// - 当遇到叶子节点的时候，判断路径上的节点值之和是否等于目标值，
// - 当遇到非叶子节点的时候，需要继续往下递归，直到遇到叶子节点，这个过程需要对目标值做递减

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  const dfs = (node: TreeNode | null, target: number) => {
    if (!node) {
      return false;
    }

    if (node.val === target && !node.left && !node.right) {
      return true;
    }

    return dfs(node.left, target - node.val) || dfs(node.right, target - node.val);
  }

  return dfs(root, targetSum);
};