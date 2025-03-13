// 思路：求最小深度，使用深度优先遍历，如果节点没有子节点，说明是叶子节点，返回深度1，如果只有一个子节点，说明不是叶子节点，返回子节点的深度+1，如果有两个子节点，返回两个子节点的最小深度+1
// 复杂度分析：时间复杂度O(n)，空间复杂度O(h)
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

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  if (!root.left) {
    return minDepth(root.right) + 1;
  }

  if (!root.right) {
    return minDepth(root.left) + 1;
  }

  return Math.min(minDepth(root.right), minDepth(root.left)) + 1;
};