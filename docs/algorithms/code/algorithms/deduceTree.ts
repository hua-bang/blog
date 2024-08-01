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

  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }

  const rootNodeVal = preorder[0];

  const rootNodeIndexInorder = inorder.findIndex(
    (item) => item === rootNodeVal
  );
  const rightNodeIndexPreOrder = rootNodeIndexInorder + 1;

  const tree = new TreeNode(rootNodeVal);

  tree.left = deduceTree(
    preorder.slice(1, rightNodeIndexPreOrder),
    inorder.slice(0, rootNodeIndexInorder)
  );

  tree.right = deduceTree(
    preorder.slice(rightNodeIndexPreOrder),
    inorder.slice(rootNodeIndexInorder + 1)
  );
  return tree;
}
