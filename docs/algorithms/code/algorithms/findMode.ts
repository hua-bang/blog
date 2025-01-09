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

function findMode(root: TreeNode | null): number[] {
  const arr: number[] = [];
  let base = 0, count = 0, maxCount = 0;

  const stack: TreeNode[] = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    arr.push(root.val);
    root = root.right;
  }

  let max = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === max) {
      count++;
    } else {
      if (count === 1) {
        max = arr[i];
      } else {
        count--;
      }
    }
  }

  return [max];
};