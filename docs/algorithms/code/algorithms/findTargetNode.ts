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

// 中序遍历
function findTargetNode(root: TreeNode | null, cnt: number): number {
  const stack: TreeNode[] = [];
  const res: number[] = [];
  let head = root;

  while (head || stack.length) {
    while (head) {
      stack.push(head);
      head = head.left;
    }

    head = stack.pop();
    res.push(head.val);
    head = head.right;
  }

  return res[res.length - cnt];
}

// 前序遍历
function findTargetNode(root: TreeNode | null, cnt: number): number {
  const stack: TreeNode[] = [];
  const res: number[] = [];
  let head = root;

  while (head || stack.length) {
    while (head) {
      stack.push(head);
      res.push(head.val);
      head = head.left;
    }

    head = stack.pop().right;
  }

  console.log("res", res);
  res.sort((a, b) => a - b);
  return res[res.length - cnt];
}
