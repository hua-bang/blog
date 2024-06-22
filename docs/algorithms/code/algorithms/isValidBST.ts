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

function isValidBSTMain(
  root: TreeNode | null,
  lower: number,
  upper: number
): boolean {
  if (!root) {
    return true;
  }

  if (root.val <= lower || root.val >= upper) {
    return false;
  }

  return (
    isValidBSTMain(root.left, lower, root.val) &&
    isValidBSTMain(root.right, root.val, upper)
  );
}

function isValidBST(root: TreeNode | null): boolean {
  return isValidBSTMain(root, -Infinity, Infinity);
}

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

  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }

    root = stack.pop();

    if (root.val <= prevValue) {
      return false;
    }

    prevValue = root.val;

    root = root.right;
  }

  return true;
}
