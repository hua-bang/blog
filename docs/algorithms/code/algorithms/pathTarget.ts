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

function pathTarget(root: TreeNode | null, target: number): number[][] {
  const result: number[][] = [];
  const arr: number[] = [];

  const dfs = (tree: TreeNode | null, curr: number, arr: number[]) => {
    if (!tree) {
      return;
    }

    const nextCurr = curr + tree.val;

    arr.push(tree.val);
    if (nextCurr === target && !tree.left && !tree.right) {
      result.push([...arr]);
      arr.pop();
      return;
    }

    if (tree.left) {
      dfs(tree.left, nextCurr, arr);
    }

    if (tree.right) {
      dfs(tree.right, nextCurr, arr);
    }
    arr.pop();
  };

  dfs(root, 0, arr);
  return result;
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

function pathTarget(root: TreeNode | null, target: number): number[][] {
  const result: number[][] = [];
  const arr: number[] = [];

  const dfs = (tree: TreeNode | null, curr: number, arr: number[]) => {
    if (!root) {
      return;
    }

    const nextVal = curr + tree.val;
    arr.push(tree.val);

    if (nextVal === target && !tree.left && !tree.right) {
      result.push([...arr]);
      arr.pop();
      return;
    }

    if (tree.left) {
      dfs(tree.left, nextVal, arr);
    }

    if (tree.right) {
      dfs(tree.right, nextVal, arr);
    }

    arr.pop();
  };

  dfs(root, 0, arr);
  return result;
}
