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

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const stack: TreeNode[] = [root];

  let count = 0;

  while (stack.length) {
    const size = stack.length;

    for (let i = 0; i < size; i++) {
      const node = stack.shift();
      count++;

      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }
    }
  }

  return count;
}

function countNodes(root: TreeNode | null): number {
  return !root ? 0 : countNodes(root.left) + countNodes(root.right) + 1;
}
