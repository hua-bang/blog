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
function isValidBSTHelper(root: TreeNode | null, lower: number, upper: number) {
  if (!root) {
    return true;
  }

  if (root.val >= upper || root.val <= lower) {
    return false;
  }

  return (
    isValidBSTHelper(root.left, lower, root.val) &&
    isValidBSTHelper(root.right, root.val, upper)
  );
}

function isValidBST(root: TreeNode | null): boolean {
  return isValidBSTHelper(root, -Infinity, Infinity);
}
