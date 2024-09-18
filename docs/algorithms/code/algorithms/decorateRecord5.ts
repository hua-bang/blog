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

function decorateRecord(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const stack: TreeNode[] = [root];
  const res: number[][] = [];
  let needReverse = false;

  while (stack.length) {
    let size = stack.length;
    const levelRes: number[] = [];
    while (size) {
      const node = stack.shift();
      size--;
      levelRes.push(node.val);
      if (node.left) {
        stack.push(node.left);
      }

      if (node.right) {
        stack.push(node.right);
      }
    }
    const arr = needReverse ? levelRes.reverse() : levelRes;
    needReverse = !needReverse;
    res.push(arr);
  }

  return res;
}
