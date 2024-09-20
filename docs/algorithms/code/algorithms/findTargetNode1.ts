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

function findTargetNode(root: TreeNode | null, cnt: number): number {
  const arr: number[] = [];
  const stack: TreeNode[] = [];
  let head = root;

  while (stack.length || head) {
    while (head) {
      stack.push(head);
      head = head.left;
    }
    head = stack.pop();
    arr.push(head.val);
    head = head.right;
  }

  return arr[arr.length - cnt];
}
