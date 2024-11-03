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
};

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

interface NodeItem {
  node: TreeNode;
  depth: number;
}

function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const rootNodeItem = {
    node: root,
    depth: 1,
  };

  const stack: NodeItem[] = [rootNodeItem];
  let maxDepth = 1;

  while (stack.length) {
    let size = stack.length;
    while (size) {
      const nodeItem = stack.shift();
      const node = nodeItem.node;
      maxDepth = Math.max(maxDepth, nodeItem.depth);

      if (node.left) {
        stack.unshift({
          node: node.left,
          depth: nodeItem.depth + 1,
        });
      }

      if (node.right) {
        stack.unshift({
          node: node.right,
          depth: nodeItem.depth + 1,
        });
      }
      size--;
    }
  }

  return maxDepth;
};

// function maxDepth(root: TreeNode | null): number {
//   if(!root) {
//     return 0;
//   }

//   return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
// };