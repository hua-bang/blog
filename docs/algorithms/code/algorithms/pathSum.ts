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

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) {
    return 0;
  }

  let res = rootSum(root, targetSum);
  res += pathSum(root.left, targetSum);
  res += pathSum(root.right, targetSum);

  return res;
}

function rootSum(root: TreeNode | null, targetSum: number) {
  let count = 0;

  const dfs = (node: TreeNode | null, prevNum: number) => {
    if (!node) {
      return;
    }

    const sum = node.val + prevNum;
    if (sum === targetSum) {
      count++;
    }

    dfs(node.left, sum);
    dfs(node.right, sum);
  };

  dfs(root, 0);
  return count;
}
