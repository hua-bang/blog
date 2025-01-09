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


function findMode(root: TreeNode | null): number[] {
  const arr: number[] = [];
  let base = 0, count = 0, maxCount = 0;

  const update = (num: number) => {
    if (base === num) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      let prevCount = count;
      count = 1;
      base = num;
      maxCount = Math.max(maxCount, count, prevCount);
    }
  }

  const stack: TreeNode[] = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    update(root.val);
    arr.push(root.val);
    root = root.right;
  }

  const res: number[] = [];

  base = arr[0];
  count = 1;

  console.log('maxCount', maxCount);
  if (maxCount === 1) {
    res.push(base);
  }

  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    if (val === base) {
      count++;
      if (count === maxCount) {
        res.push(val);
      }
    } else {
      count = 1;
      base = val
      if (maxCount === 1) {
        res.push(val);
      }
    }
  }

  return res;
};