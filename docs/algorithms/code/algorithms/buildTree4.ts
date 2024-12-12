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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length) {
    return null;
  }

  const rootVal = preorder[0];
  const rootIndexInInOrder = inorder.findIndex(item => item === rootVal);

  const rootNode = new TreeNode(rootVal);

  rootNode.left = buildTree(preorder.slice(1, rootIndexInInOrder + 1), inorder.slice(0, rootIndexInInOrder));
  rootNode.right = buildTree(preorder.slice(rootIndexInInOrder + 1), inorder.slice(rootIndexInInOrder + 1));

  return rootNode;
};