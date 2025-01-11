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

// 描述：给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。
// 高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。

// 思路：
// 使用递归的方式，将数组分成左右两部分，分别构建左右子树
// 注意，这里去 root 的时候，取得是中间的索引， 因为这样子能保证高度平衡

function sortedArrayToBSTHelper(nums: number[], left: number, right: number): TreeNode | null {
  if (left === right) {
    return new TreeNode(nums[left]);
  }

  if (left > right) {
    return null;
  }

  const mid = Math.floor((left + right) / 2);

  const root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBSTHelper(nums, left, mid - 1);
  root.right = sortedArrayToBSTHelper(nums, mid + 1, right);

  return root;
}


function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }

  return sortedArrayToBSTHelper(nums, 0, nums.length - 1);
};