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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const stack: TreeNode[] = [root];
  const res: number[][] = [];

  while (stack.length) {
    let size = stack.length;
    const level: number[] = [];
    while (size) {
      const node = stack.shift();
      level.push(node.val);

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }
      size--;
    }

    res.push(level);
  }

  return res;
}
