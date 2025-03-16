// 思路：根据二叉搜索树的性质，左子树的值都小于根节点的值，右子树的值都大于根节点的值
// 时间复杂度：O(logn) 这里 O(logn) 是因为每次我们只需要选一个子树就行
// 空间复杂度：O(1)
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
  if (!root) {
    return null;
  }

  let curr = root;

  while (curr) {
    if (curr.val === val) {
      return curr;
    } else if (curr.val > val) {
      curr = curr.left;
    } else {
      curr = curr.right;
    }
  }

  return null;
};