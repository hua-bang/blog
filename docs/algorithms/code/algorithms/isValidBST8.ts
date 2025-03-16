// 思路：通过递归，判断节点是否符合要求
// 复杂度：时间复杂度O(n)，空间复杂度O(h)
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

function isValidBSTHelper(root: TreeNode | null, min: number, max: number) {
  if (!root) {
    return true;
  }

  const val = root.val;
  if (val <= min || val >= max) {
    return false;
  }

  return isValidBSTHelper(root.left, min, val) && isValidBSTHelper(root.right, val, max);
}

function isValidBST(root: TreeNode | null): boolean {
  return isValidBSTHelper(root, -Infinity, Infinity);
};