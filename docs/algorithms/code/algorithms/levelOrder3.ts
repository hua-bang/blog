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
  const res: number[][] = [];
  const stack: Array<TreeNode> = [root];

  while (stack.length) {
    const size = stack.length;
    const levelRes: number[] = [];
    for (let i = 0; i < size; i++) {
      const node = stack.shift();
      levelRes.push(node.val);

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }
    }
    res.push(levelRes);
  }

  return res;
}
