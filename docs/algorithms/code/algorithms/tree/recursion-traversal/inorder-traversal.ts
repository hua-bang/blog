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

function inorderTraversalHelper(root: TreeNode | null, arr: number[]) {
  if(!root) {
    return
  }

  if(root.left) {
    inorderTraversalHelper(root.left, arr);
  }

  arr.push(root.val);

  if(root.right) {
    inorderTraversalHelper(root.right, arr);
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  if(!root) {
    return [];
  }

  const arr: number[] = [];
  inorderTraversalHelper(root, arr);
  return arr;
};