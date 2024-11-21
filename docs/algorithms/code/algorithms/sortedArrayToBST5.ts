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

function sortedArrayToBSTHelper(nums: number[], left: number, right: number) {
  if (left === right) {
    return new TreeNode(nums[left]);
  }

  if (left > right) {
    return null;
  }

  const mid = Math.floor((left + right) / 2);
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBSTHelper(nums, left, mid - 1);
  root.right = sortedArrayToBSTHelper(nums, mid + 1, right);
  return root;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }

  return sortedArrayToBSTHelper(nums, 0, nums.length - 1);
};