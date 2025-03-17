// 思路：后序遍历（左右根）
// 1. 如果当前节点是p或q，直接返回该节点
// 2. 递归搜索左右子树
// 3. 如果左右子树都返回非空，说明当前节点是最近公共祖先
// 4. 如果只有一边返回非空，返回非空的那一边
// 复杂度：时间O(n)，空间O(h)，h为树的高度
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if(!root) {
    return null;
  }

  if(root === p) {
    return p;
  }

  if(root === q) {
    return q;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  
  if(left && right) {
    return root;
  }

  return left ? left : right;
};