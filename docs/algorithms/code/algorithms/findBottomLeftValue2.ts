// 思路：通过层序遍历，找到最后一层的第一个节点
// 复杂度分析：时间复杂度 O(n) 空间复杂度 O(n)
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
  let res: number;

  while (stack.length) {
    let size = stack.length;

    for (let i = 0; i < size; i++) {
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