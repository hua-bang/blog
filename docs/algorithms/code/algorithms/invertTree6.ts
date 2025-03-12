// 思路：去 root， 将 left 和 right 交互，并且这个过程中也要反转 left 和 right
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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);

  return root;
};