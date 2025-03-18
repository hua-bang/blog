// 思路：利用 BST 特性，如果当前节点值在 [p, q] 之间，或者当前节点值在 [q, p] 之间，那么当前节点就是最近公共祖先
// 否则，如果当前节点值大于 p 和 q 的值，那么最近公共祖先一定在当前节点的左子树中，
// 否则，如果当前节点值小于 p 和 q 的值，那么最近公共祖先一定在当前节点的右子树中
// 否则，返回 null
// 复杂度分析：时间复杂度 O(log n)，空间复杂度 O(log n)
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

  if(root.val >= p.val && root.val <= q.val) {
    return root;
  }

  if(root.val >= q.val && root.val <= p.val) {
    return root;
  }

  if(root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  if(root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return null;
};