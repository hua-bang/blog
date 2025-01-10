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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return new TreeNode(val);
  }
  let head = root;

  while (head) {
    if (head.val > val) {
      if (!head.left) {
        head.left = new TreeNode(val);
        break;
      }
      head = head.left;
    }

    if (head.val < val) {
      if (!head.right) {
        head.right = new TreeNode(val);
        break;
      }
      head = head.right;
    }
  }

  return root;
};