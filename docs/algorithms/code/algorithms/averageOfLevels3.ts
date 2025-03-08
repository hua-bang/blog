// 思路：层序遍历，每层收集节点值，计算平均值
// 复杂度：时间复杂度O(n)，空间复杂度O(n)
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

function averageOfLevels(root: TreeNode | null): number[] {
  if(!root) {
    return [];
  }

  const res: number[] = [];

  const stack: TreeNode[] = [root]

  while(stack.length) {
    let size = stack.length;
    let sum = 0
    for(let i = 0; i < size; i++) {
      const node = stack.shift();
      sum += node.val;
      if(node.left) {
        stack.push(node.left)
      }
      if(node.right) {
        stack.push(node.right)
      }
    }
    res.push(sum / size);
  }

  return res;
};