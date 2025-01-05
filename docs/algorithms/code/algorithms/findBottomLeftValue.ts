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

// 描述：需要找到最后一层最左边的节点的值
// 思路：层序遍历，找到最后一层的第一个节点的值

function findBottomLeftValue(root: TreeNode | null): number {
  const stack: TreeNode[] = [root];

  let res = 0;

  while (stack.length) {
    const len = stack.length;
    for (let i = 0; i < len; i++) {
      const node = stack.shift();
      if (i === 0) {
        res = node.val;
      }
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }

  return res;
};