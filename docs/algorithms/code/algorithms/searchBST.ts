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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {

  let targetNode: TreeNode | null = null;

  const dfs = (node: TreeNode | null, val: number) => {
    if (!node) {
      return;
    }

    if (node.val === val) {
      targetNode = node;
      return;
    }

    if (node.val > val) {
      dfs(node.left, val);
    }

    if (node.val < val) {
      dfs(node.right, val);
    }
  }

  dfs(root, val);
  return targetNode;
};


function searchBST(root: TreeNode | null, val: number): TreeNode | null {

  while (root) {
    if (root.val > val) {
      root = root.left;
    } else if (root.val < val) {
      root = root.right;
    } else {
      return root;
    }
  }
  return null;
};

Infinity