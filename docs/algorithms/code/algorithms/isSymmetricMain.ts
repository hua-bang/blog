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

function isSymmetricMain(
  leftNode: TreeNode | null,
  rightNode: TreeNode | null
): boolean {
  if (!leftNode && !rightNode) {
    return true;
  }

  if (!leftNode || !rightNode) {
    return false;
  }

  if (leftNode.val !== rightNode.val) {
    return false;
  }

  return (
    isSymmetricMain(leftNode.left, rightNode.right) &&
    isSymmetricMain(leftNode.right, rightNode.left)
  );
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return isSymmetricMain(root.left, root.right);
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  const stack: Array<TreeNode | null> = [root.left, root.right];

  while (stack.length) {
    const right = stack.pop();
    const left = stack.pop();

    if (!left && !right) {
      continue;
    }

    if (!left || !right) {
      return false;
    }

    if (right.val !== left.val) {
      return false;
    }

    stack.push(left.left);
    stack.push(right.right);

    stack.push(left.right);
    stack.push(right.left);
  }

  return true;
}
