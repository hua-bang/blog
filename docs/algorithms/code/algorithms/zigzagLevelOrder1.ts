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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const res: number[][] = [];
  const stack: TreeNode[] = [root];
  let needReverse = false;

  while (stack.length) {
    let size = stack.length;
    const levelRes: number[] = [];
    while (size--) {
      const node = stack.shift();
      levelRes.push(node.val);
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
    res.push(needReverse ? levelRes.reverse() : levelRes);
    needReverse = !needReverse;
  }

  return res;
};