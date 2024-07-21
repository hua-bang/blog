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

function isValidBST(root: TreeNode | null): boolean {
  const stack: TreeNode[] = [];
  let prevValue = -Infinity;

  let current: TreeNode | null = root;

  while (stack.length || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop()!;
    if (current.val <= prevValue) {
      return false;
    }

    prevValue = current.val;
    current = current.right;
  }

  return true;
}

const isValidBSTHelper = (
  root: TreeNode | null,
  lower: number,
  upper: number
) => {
  if (!root) {
    return true;
  }

  if (root.val <= lower || root.val >= upper) {
    return false;
  }

  return (
    isValidBSTHelper(root.left, lower, root.val) &&
    isValidBSTHelper(root.right, root.val, upper)
  );
};
