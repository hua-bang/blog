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

  const stack: TreeNode[] = [root];

  while (stack.length) {
    let size = stack.length;
    const record: number[] = [];
    while (size) {
      const node = stack.shift();
      if (node) {
        record.push(node.val);
        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
      }

      size--;
    }

    record.length && res.push(record);
  }

  return res;
}
