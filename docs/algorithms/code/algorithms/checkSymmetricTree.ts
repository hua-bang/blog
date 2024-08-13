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

function checkHelper(leftNode: TreeNode | null, rightNode: TreeNode | null) {
  if (!leftNode && !rightNode) {
    return true;
  }

  if (!leftNode || !rightNode) {
    return false;
  }

  return (
    leftNode.val === rightNode.val &&
    checkHelper(leftNode.left, rightNode.right) &&
    checkHelper(leftNode.right, rightNode.left)
  );
}

function checkSymmetricTree(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  if (!root.left && !root.right) {
    return true;
  }

  return checkHelper(root.left, root.right);
}

function checkSymmetricTree(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return checkSymmetricTreeHelper(root.left, root.right);
}

function checkSymmetricTreeHelper(a: TreeNode | null, b: TreeNode | null) {
  if (!a && !b) {
    return true;
  }
  if (!a || !b) {
    return false;
  }

  return (
    a.val === b.val &&
    checkSymmetricTreeHelper(a.left, b.right) &&
    checkSymmetricTreeHelper(a.right, b.left)
  );
}
