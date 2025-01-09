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
// 描述: 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
// 思路: 递归
// 1. 如果当前节点是 p 或 q，则返回当前节点
// 2. 如果当前节点为 null，则返回 null
// 3. 递归遍历左子树和右子树判断，如果左右子树的判断结果都不为 null，说明当前节点就是最近公共祖先，则返回当前节点
// 4. 如果左子树为 null，则返回右子树
// 5. 如果右子树为 null，则返回左子树

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === q || root === p) {
    return root;
  }

  if (!root) {
    return null;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left ? left : right;
};