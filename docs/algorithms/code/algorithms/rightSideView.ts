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

function rightSideView(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const res: number[] = [];

  const stack: TreeNode[] = [root];

  while (stack.length) {
    const size = stack.length;

    for (let i = 0; i < size; i++) {
      const node = stack.shift();

      if (i === size - 1) {
        res.push(node.val);
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
}
