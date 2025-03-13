// 思路：通过递归，获取左右子树的高度，如果高度差大于1，则先返回 -1
// 复杂度分析：时间复杂度 O(n) 空间复杂度 O(h)
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

  const leftHeight = getDepth(root.left);
  const rightHeight = getDepth(root.right);

  if (leftHeight === -1 || rightHeight === -1) {
    return -1;
  }

  const diff = Math.abs(leftHeight - rightHeight);

  if (diff > 1) {
    return -1;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return getDepth(root) !== -1;
};