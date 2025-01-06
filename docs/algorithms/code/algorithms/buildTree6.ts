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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length) {
    return null;
  }

  const rootVal = postorder[postorder.length - 1];
  const rootNode = new TreeNode(rootVal);

  const rootIndexInInOrder = inorder.findIndex(item => item === rootVal);
  const rightNodeIndexInPostOrder = rootIndexInInOrder;

  rootNode.left = buildTree(
    inorder.slice(0, rootIndexInInOrder),
    postorder.slice(0, rootIndexInInOrder)
  );

  rootNode.right = buildTree(
    inorder.slice(rootIndexInInOrder + 1),
    postorder.slice(rightNodeIndexInPostOrder, postorder.length - 1)
  );

  return rootNode;
};