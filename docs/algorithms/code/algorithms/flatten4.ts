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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (!root) {
    return;
  }

  const stack: TreeNode[] = [];
  let head = root;
  const res: TreeNode[] = [];
  while (stack.length || head) {
    while (head) {
      res.push(head);
      stack.push(head);
      head = head.left;
    }

    head = stack.pop()?.right;
  }

  for (let i = 0; i < res.length - 1; i++) {
    res[i].left = null;
    res[i].right = res[i + 1];
  }
};