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

function isValidBSTHelper(root: TreeNode | null, min: number, max: number): boolean {
  if (!root) {
    return true;
  }

  if (root.val <= min || root.val >= max) {
    return false;
  }

  return isValidBSTHelper(root.left, min, root.val) && isValidBSTHelper(root.right, root.val, max);
}

function isValidBST(root: TreeNode | null): boolean {
  return isValidBSTHelper(root, -Infinity, Infinity);
};