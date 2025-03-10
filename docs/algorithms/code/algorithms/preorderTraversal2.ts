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
// 本质上是中，左，右
function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const res: number[] = [];
  const stack: TreeNode[] = [];

  while (stack.length || root) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }

    root = stack.pop().right;
  }

  return res;
};