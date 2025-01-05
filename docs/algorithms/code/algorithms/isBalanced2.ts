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

// 思路，需要满足两个条件
// 1. 左右子树的高度差不超过 1
// 2. 左右子树都是平衡二叉树

/**
 * 获取树的深度
 * @param root
 * @returns
 */
function getDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}

/**
 * 判断是否是平衡二叉树
 * @param root
 * @returns
 */
function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return Math.abs(
    getDepth(root.left) - getDepth(root.right)
  ) < 2 && isBalanced(root.left) && isBalanced(root.right);
};