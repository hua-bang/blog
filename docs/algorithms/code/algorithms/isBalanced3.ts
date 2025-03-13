// 思路：通过递归，计算左右子树的深度的差距，判断左右子树的深度是否平衡
// 复杂度分析：时间复杂度O(n * n), 空间复杂度O(h)
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

function getDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return Math.abs(
    getDepth(root.left) - getDepth(root.right)
  ) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};