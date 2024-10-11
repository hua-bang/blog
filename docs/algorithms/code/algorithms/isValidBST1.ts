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

function isValidBSTHelper(root: TreeNode | null, left: number, right: number) {
  if (!root) {
    return true;
  }

  if (root.val <= left || root.val >= right) {
    return false;
  }

  return (
    isValidBSTHelper(root.left, left, root.val) &&
    isValidBSTHelper(root.right, root.val, right)
  );
}

function isValidBST(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return isValidBSTHelper(root, -Infinity, Infinity);
}
