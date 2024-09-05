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
function sortedArrayToBSTArr(nums: number[], left: number, right: number) {
  if (left > right) {
    return null;
  }
  const mid = (left + right) >> 1;
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBSTArr(nums, left, mid - 1);
  root.right = sortedArrayToBSTArr(nums, mid + 1, right);
  return root;
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }
  return sortedArrayToBSTArr(nums, 0, nums.length - 1);
}
