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

function preorderTraversalHelper(root: TreeNode | null, arr: number[]) {
  if(!root) {
    return;
  }

  arr.push(root.val);
  if(root.left) {
    preorderTraversalHelper(root.left, arr);
  }
  if(root.right) {
    preorderTraversalHelper(root.right, arr);
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  if(!root) {
    return [];
  }

  const arr: number[] = []
  preorderTraversalHelper(root, arr);
  return arr;
};