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

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const stack: TreeNode[] = [];
  const res: number[] = [];

  while (root || stack.length) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }

    root = stack.pop().right;
  }

  return res;

};