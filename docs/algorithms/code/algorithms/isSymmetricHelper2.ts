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

function isSymmetricHelper(leftNode: TreeNode | null, rightNode: TreeNode | null) {
  if (!leftNode && !rightNode) {
    return true;
  }

  if (!leftNode || !rightNode) {
    return false;
  }

  if (leftNode.val !== rightNode.val) {
    return false
  }

  return isSymmetricHelper(leftNode.left, rightNode.right) && isSymmetricHelper(leftNode.right, rightNode.left);
}

function isSymmetric(root: TreeNode | null): boolean {
  return isSymmetricHelper(root.left, root.right);
};