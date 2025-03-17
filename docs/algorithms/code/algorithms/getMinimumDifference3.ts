// 思路：通过中序遍历获取有序数组，然后遍历有序数组，获取最小差值
// 复杂度分析：时间复杂度O(n)，空间复杂度O(h)
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

function getMinimumDifference(root: TreeNode | null): number {
  const stack: TreeNode[] = [];
  let min = Infinity;
  let prevValue = -Infinity;

  while(stack.length || root) {
    while(root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    const currVal = root.val;
    if (prevValue !== - Infinity) {
      min = Math.min(min, Math.abs(currVal - prevValue));
    }
    prevValue = currVal;
    root = root.right;
  }

  return min;
};