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
  const res: TreeNode[] = [];
  let curr = root;

  while (stack.length || curr) {
    while (curr) {
      stack.push(curr);
      res.push(curr);
      curr = curr.left;
    }

    curr = stack.pop().right;
  }

  for (let i = 0; i < res.length; i++) {
    res[i].left = null;
    res[i].right = res[i + 1] || null
  }
};