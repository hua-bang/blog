// 思路：通过 dfs 遍历二叉树，并给上 left 标识，当节点遍历到叶子节点时，判断是否是左叶子节点，如果是，将值加入结果中
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(h)
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

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let res = 0;

  const dfs = (node: TreeNode | null, isLeft: boolean) => {
    if (!node) {
      return;
    }

    if (!node.left && !node.right && isLeft) {
      res += node.val;
    }

    if (node.left) {
      dfs(node.left, true);
    }

    if (node.right) {
      dfs(node.right, false);
    }
  }

  dfs(root, false);

  return res;
};