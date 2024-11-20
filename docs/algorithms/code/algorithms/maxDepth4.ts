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

interface StackItem {
  node: TreeNode;
  depth: number;
}


function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const stack: Array<StackItem> = [{ node: root, depth: 1 }];
  let max = 1;

  while (stack.length) {
    let size = stack.length;
    while (size--) {
      const item = stack.shift();
      max = Math.max(item.depth, max);
      const { node } = item;

      if (node.left) {
        stack.push({
          node: node.left,
          depth: item.depth + 1,
        });
      }

      if (node.right) {
        stack.push({
          node: node.right,
          depth: item.depth + 1,
        });
      }
    }
  }

  return max;
};