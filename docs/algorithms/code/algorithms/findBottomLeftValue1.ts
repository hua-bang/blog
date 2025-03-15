// 思路：层序遍历，最后一层第一个节点
// 复杂度分析：时间复杂度O(n)，空间复杂度O(n)
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

function findBottomLeftValue(root: TreeNode | null): number {
  const stack: TreeNode[] = [root];

  while (stack.length) {
    let size = stack.length;
    const res: number[] = [];
    while (size--) {
      const node = stack.shift();
      res.push(node.val);

      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    if (!stack.length) {
      return res[0];
    }
  }

  return -1;
};