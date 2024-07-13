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

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const nodeQueue: Array<TreeNode> = [root];
  let ans = 0;

  while (nodeQueue.length) {
    let size = nodeQueue.length;

    while (size) {
      const node = nodeQueue.shift();

      if (node.left) {
        nodeQueue.push(node.left);
      }

      if (node.right) {
        nodeQueue.push(node.right);
      }

      size--;
    }

    ans += 1;
  }

  return ans;
}

interface NodeQueueItem {
  node: TreeNode;
  depth: number;
}

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const nodeQueue: Array<NodeQueueItem> = [
    {
      node: root,
      depth: 1,
    },
  ];

  let maxDepth = 1;

  while (nodeQueue.length) {
    const { node, depth } = nodeQueue.pop()!;

    if (node) {
      maxDepth = Math.max(maxDepth, depth);

      if (node.left) {
        nodeQueue.push({
          node: node.left,
          depth: depth + 1,
        });
      }

      if (node.right) {
        nodeQueue.push({
          node: node.right,
          depth: depth + 1,
        });
      }
    }
  }

  return maxDepth;
}
