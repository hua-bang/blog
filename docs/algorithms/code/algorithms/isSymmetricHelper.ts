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

function isSymmetricHelper(leftRoot: TreeNode | null, rightRoot: TreeNode | null) {
  if (!leftRoot && !rightRoot) {
    return true;
  }

  if (!leftRoot || !rightRoot) {
    return false;
  }

  return leftRoot.val === rightRoot.val && isSymmetricHelper(leftRoot.left, rightRoot.right) && isSymmetricHelper(leftRoot.right, rightRoot.left);
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return isSymmetricHelper(root.left, root.right);
};