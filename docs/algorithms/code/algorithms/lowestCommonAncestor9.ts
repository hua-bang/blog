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

  const leftNode = p.val > q.val ? q : p;
  const rightNode = leftNode === q ? p : q;

  while (root) {
    if ((root.val >= leftNode.val) && (root.val <= rightNode.val)) {
      return root;
    }

    if (root.val > leftNode.val && root.val > rightNode.val) {
      root = root.left;
    }

    if (root.val < leftNode.val && root.val < rightNode.val) {
      root = root.right;
    }
  }

  return null;
};