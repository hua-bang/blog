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
  const list: TreeNode[] = [];
  const stack: TreeNode[] = [];
  let node = root;
  while (node !== null || stack.length) {
    while (node != null) {
      list.push(node);
      stack.push(node);
      node = node.left;
    }
    const node1 = stack.pop();
    node = node1.right;
  }

  const size = list.length;
  for (let i = 1; i < size; i++) {
    const prev = list[i - 1],
      curr = list[i];
    prev.left = null;
    prev.right = curr;
  }
}
