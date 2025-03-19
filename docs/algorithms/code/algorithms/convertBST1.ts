// 思路：主要通过“右，中，左”的顺序来遍历二叉搜索树，在过程中累加节点的值
// 复杂度分析：时间复杂度 O(N), 空间复杂度 O(N)
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

function convertBST(root: TreeNode | null): TreeNode | null {
  if(!root) {
    return null;
  }

  let head = root;
  const stack: TreeNode[] = [];
  let count = 0;

  while(head || stack.length) {
    while(head) {
      stack.push(head);
      head = head.right;
    }

    head = stack.pop();
    count += head.val;
    head.val = count;
    head = head.left;
  }

  return root;
};