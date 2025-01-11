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

function bstToGst(root: TreeNode | null): TreeNode | null {
  let sum = 0;

  function convertBSTHelper(root: TreeNode | null,) {
    if (!root) {
      return null;
    }
    convertBSTHelper(root.right);
    sum += root.val;
    root.val = sum;
    convertBSTHelper(root.left);

    return root;
  }

  return convertBSTHelper(root);
};