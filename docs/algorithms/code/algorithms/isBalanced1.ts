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

function getHeight(root: TreeNode | null) {
  if (!root) {
    return 0;
  }

  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1
  );
}
