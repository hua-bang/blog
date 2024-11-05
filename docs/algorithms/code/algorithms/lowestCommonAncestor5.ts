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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  if (root === p || root === q) {
    return root;
  }

  const leftRes = lowestCommonAncestor(root.left, p, q);
  const rightRes = lowestCommonAncestor(root.right, p, q);

  if (leftRes && rightRes) {
    return root;
  }

  return leftRes ? leftRes : rightRes;
};