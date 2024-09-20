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
function pathTarget(root: TreeNode | null, target: number): number[][] {
  if (!root) {
    return [];
  }

  const res: number[][] = [];

  const dfs = (node: TreeNode | null, targetVal: number, prevArr: number[]) => {
    if (!node) {
      return;
    }

    if (node.val === targetVal && !node.left && !node.right) {
      res.push([...prevArr, node.val]);
    }

    dfs(node.left, targetVal - node.val, [...prevArr, node.val]);
    dfs(node.right, targetVal - node.val, [...prevArr, node.val]);
  };

  dfs(root, target, []);
  return res;
}
