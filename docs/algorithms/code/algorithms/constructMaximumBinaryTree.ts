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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }

  const rootVal = Math.max(...nums);

  const rootNode = new TreeNode(rootVal);

  const rootIndex = nums.findIndex(item => item === rootVal);

  rootNode.left = constructMaximumBinaryTree(nums.slice(0, rootIndex));
  rootNode.right = constructMaximumBinaryTree(nums.slice(rootIndex + 1));

  return rootNode;
};