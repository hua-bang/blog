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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }
  const dfs = (node: TreeNode | null, target: number) => {
    if (!node) {
      return false;
    }

    if (target === node.val && (!node.left) && !(node.right)) {
      return true;
    }

    return dfs(node.left, target - node.val) || dfs(node.right, target - node.val);
  }


  return dfs(root, targetSum);
};