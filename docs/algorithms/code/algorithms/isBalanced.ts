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

function height(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  return Math.max(height(root.left), height(root.right)) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(height(root.left) - height(root.right)) <= 1
  );
}
