// 思路：通过递归的方式获取左右子树的最大深度，然后比较大小
// 复杂度分析：实践复杂度O(n)，空间复杂度O(n)
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

function maxDepth(root: TreeNode | null): number {
  if(!root) {
    return 0;
  }  

  return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1;
};