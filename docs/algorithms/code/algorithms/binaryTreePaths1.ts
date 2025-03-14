// 思路：通过 dfs 遍历二叉树，记录当前路径，当遍历到叶子节点时，将路径加入结果数组中
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(n * n)
// - 时间复杂度：O(n)， 是因为每个节点应应该是被遍历一次
// - 空间复杂度：O(n *n )， 并且这个空间是 res 数据空间，实际上是叶子节点的个数，也就是 n/2，所以是 O(n)
//
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

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) {
    return [];
  }

  const res: string[] = [];

  const dfs = (prePath: string, node: TreeNode | null) => {
    if (!node) {
      return;
    }

    const path = prePath ? `${prePath}->${node.val}` : `${node.val}`;

    if (!node.left && !node.right) {
      res.push(path);
    }

    dfs(path, node.left);
    dfs(path, node.right);
  }

  dfs('', root);

  return res;
};