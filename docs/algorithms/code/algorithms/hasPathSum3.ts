// 思路：通过深度优先遍历，记录路径，当到达叶子节点时，判断当前的节点值是否为目标值
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(h)
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  function hasPathSumHelper(node: TreeNode | null, target: number): boolean {
    if (!node) {
      return false;
    }

    if (node.val === target && !node.left && !node.right) {
      return true;
    }

    const nextTarget = target - node.val;

    return hasPathSumHelper(node.left, nextTarget) || hasPathSumHelper(node.right, nextTarget);
  }

  return hasPathSumHelper(root, targetSum);
};