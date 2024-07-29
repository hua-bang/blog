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

function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return root;
  }

  const originLeftNode = root.left;
  const originRightNode = root.right;

  root.left = mirrorTree(originRightNode);
  root.right = mirrorTree(originLeftNode);

  return root;
}
