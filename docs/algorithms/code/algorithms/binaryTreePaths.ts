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

// 思路： 整体使用 DFS 进行遍历，在 DFS 过程中，生成对应的字符串，然后到叶子节点的时候，将字符串加入到结果中

function binaryTreePaths(root: TreeNode | null): string[] {
  const result: string[] = [];

  if (!root) {
    return [];
  }

  const dfs = (node: TreeNode, prefixPath: string) => {
    const nextPath = prefixPath ? `${prefixPath}->${node.val}` : `${node.val}`;
    if (!node.left && !node.right) {
      const nextPath = prefixPath ? `${prefixPath}->${node.val}` : `${node.val}`;
      result.push(nextPath);
      return;
    }

    if (node.left) {
      dfs(node.left, nextPath);
    }

    if (node.right) {
      dfs(node.right, nextPath);
    }

  };

  dfs(root, '');

  return result;
};