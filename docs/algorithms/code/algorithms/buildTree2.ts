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
  if (preorder.length === 0) {
    return null;
  }

  const rootValue = preorder[0];
  const rootNodeIndexInOrder = inorder.findIndex(item => item === rootValue);

  const rootNode = new TreeNode(rootValue);
  rootNode.left = buildTree(preorder.slice(1, rootNodeIndexInOrder + 1), inorder.slice(0, rootNodeIndexInOrder));
  rootNode.right = buildTree(preorder.slice(rootNodeIndexInOrder + 1), inorder.slice(rootNodeIndexInOrder + 1));

  return rootNode;
};