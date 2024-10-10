function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

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

interface TreeNodeItem {
  node: TreeNode;
  depth: number;
}

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const stack: Array<TreeNodeItem> = [];
  stack.push({
    node: root,
    depth: 1,
  });

  let max = 1;

  while (stack.length) {
    const treeNodeItem = stack.shift();
    max = Math.max(treeNodeItem.depth, max);

    if (treeNodeItem.node.left) {
      stack.push({
        node: treeNodeItem.node.left,
        depth: treeNodeItem.depth + 1,
      });
    }

    if (treeNodeItem.node.right) {
      stack.push({
        node: treeNodeItem.node.right,
        depth: treeNodeItem.depth + 1,
      });
    }
  }

  return max;
}
