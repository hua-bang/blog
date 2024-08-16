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

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function deduceTree(preorder: number[], inorder: number[]): TreeNode | null {
  console.log("preOrder", preorder, "inOrder", inorder);
  if (preorder.length === 0) {
    return null;
  }

  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }

  const rootNodeValue = preorder[0];
  const rootNodeIndexInInOrder = inorder.findIndex(
    (nodeVal) => nodeVal === rootNodeValue
  );

  const root = new TreeNode(rootNodeValue);

  root.left = deduceTree(
    preorder.slice(1, rootNodeIndexInInOrder + 1),
    inorder.slice(0, rootNodeIndexInInOrder)
  );
  root.right = deduceTree(
    preorder.slice(rootNodeIndexInInOrder + 1),
    inorder.slice(rootNodeIndexInInOrder + 1)
  );

  return root;
}

deduceTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
