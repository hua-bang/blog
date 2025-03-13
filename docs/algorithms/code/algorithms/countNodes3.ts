// 思路：通过计算左右子树的节点数量，得出结果
// count(root) = count(left) + count(right) + 1
// 复杂度分析：时间复杂度 O(n) 空间复杂度 O(h)
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

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return countNodes(root.left) + countNodes(root.right) + 1;
};