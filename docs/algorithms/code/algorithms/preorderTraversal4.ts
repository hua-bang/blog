// 思路：使用迭代方式来进行前序遍历(根左右)
// 先把 root 填入 res 中，然后把 root 入栈, 然后 root = root.left
// 当 root 为 null 时，说明已经遍历到最左节点，此时需要出栈，然后 root = root.right
// 当 root 为 null 且 stack 为空时，说明已经遍历完所有节点，此时返回 res
// 复杂度分析： 时间复杂度：O(n) 空间复杂度：O(n)
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

function preorderTraversal(root: TreeNode | null): number[] {
  if(!root) {
    return [];
  }

  const res: number[] =[];

  const stack: TreeNode[] = [];

  while(root || stack.length) {
    while(root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }

    root = stack.pop().right;
  }

  return res;
};