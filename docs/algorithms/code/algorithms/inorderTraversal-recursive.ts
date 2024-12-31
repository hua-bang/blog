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

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const res: number[] = [];

  const traversal = (node: TreeNode) => {
    if (node.left) {
      traversal(node.left);
    }

    res.push(node.val);

    if (node.right) {
      traversal(node.right);
    }

  }

  traversal(root);

  return res;
};