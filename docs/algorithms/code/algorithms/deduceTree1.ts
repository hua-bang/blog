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

function deduceTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length) {
    return null;
  }

  const rootNodeVal = preorder[0];
  const rootNode = new TreeNode(rootNodeVal);
  const rootNodeIndexInOrder = inorder.findIndex(
    (item) => item === rootNodeVal
  );
  const rightNodeIndexPreOrder = rootNodeIndexInOrder + 1;

  rootNode.left = deduceTree(
    preorder.slice(1, rightNodeIndexPreOrder),
    inorder.slice(0, rootNodeIndexInOrder)
  );
  rootNode.right = deduceTree(
    preorder.slice(rightNodeIndexPreOrder),
    inorder.slice(rootNodeIndexInOrder + 1)
  );

  return rootNode;
}
