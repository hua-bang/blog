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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return targetSum === root.val;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  const queNode: TreeNode[] = [];
  const queVal: number[] = [];
  queNode.push(root);
  queVal.push(root.val);

  while (queNode.length > 0) {
    const now = queNode.shift()!;
    const temp = queVal.shift()!;

    if (!now.left && !now.right) {
      if (temp === targetSum) {
        return true;
      }
      continue;
    }

    if (now.left !== null) {
      queNode.push(now.left);
      queVal.push(now.left.val + temp);
    }

    if (now.right !== null) {
      queNode.push(now.right);
      queVal.push(now.right.val + temp);
    }
  }

  return false;
}
