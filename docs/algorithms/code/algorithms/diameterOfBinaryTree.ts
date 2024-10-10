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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let max = 0;

  const depth = (node: TreeNode | null) => {
    if (!node) {
      return 0;
    }
    const L = depth(node.left);
    const R = depth(node.right);

    max = Math.max(max, L + R);
    return Math.max(L, R) + 1;
  };

  depth(root);

  return max;
}
