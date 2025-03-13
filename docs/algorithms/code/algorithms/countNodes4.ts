// 思路：通过完全二叉树的性质来计算节点数， 如果两个子树的高度相同，那么这个子树就是满二叉树， 节点数为 2^h - 1， 如果两个子树的高度不同，那么这个子树不是满二叉树， 节点数为 左子树的节点数 + 右子树的节点数 + 1
// 复杂度：时间复杂度 O(logn * logn)，空间复杂度 O(logn)

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

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  let leftDepth = 0, rightDepth = 0;
  let leftNode = root.left, rightNode = root.right;

  while (leftNode) {
    leftDepth++;
    leftNode = leftNode.left;
  }
  while (rightNode) {
    rightDepth++;
    rightNode = rightNode.right;
  }

  if (leftDepth === rightDepth) {
    return (1 << (leftDepth + 1)) - 1;
  } else {
    return countNodes(root.left) + countNodes(root.right) + 1;
  }
};