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

function isSymmetricHeler(a: TreeNode | null, b: TreeNode | null) {
  if (!a && !b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  return (
    a.val === b.val &&
    isSymmetricHeler(a.left, b.right) &&
    isSymmetricHeler(a.right, b.left)
  );
}

// 本质上是对比左右子树是否对层
function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return isSymmetricHeler(root.left, root.right);
}
