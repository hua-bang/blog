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

function postorderTraversalHelper(root: TreeNode | null, arr: number[]) {
  if (!root) {
    return; 
  }

  if(root.left) {
    postorderTraversalHelper(root.left, arr);
  }
  if(root.right) {
    postorderTraversalHelper(root.right, arr);
  }

  

  arr.push(root.val);
}

function postorderTraversal(root: TreeNode | null): number[] {
  if(!root) {
    return [];
  }
  const arr: number[] = [];
  postorderTraversalHelper(root, arr);
  return arr;
};