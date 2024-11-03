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

function isSymmetricTree(left: TreeNode | null, right: TreeNode | null) {
  if (!left && !right) {
    return true;
  }

  if (!left || !right) {
    return false;
  }

  return left.val === right.val && isSymmetricTree(left.left, right.right) && isSymmetricTree(left.right, right.left);
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return isSymmetricTree(root.left, root.right);
};