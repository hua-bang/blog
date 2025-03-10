// 思路：层序遍历倒过来即可
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  if(!root) {
    return [];
  }

  const res: number[][] = [];
  const stack: TreeNode[] = [root]

  while(stack.length) {
    let size = stack.length;
    const levelRes: number[] = [];

    while(size--) {
      const node = stack.shift();
      levelRes.push(node.val);
      if(node.left) {
        stack.push(node.left)
      }
      if(node.right) {
        stack.push(node.right)
      }
    }

    res.unshift(levelRes);
  }

  return res;
};