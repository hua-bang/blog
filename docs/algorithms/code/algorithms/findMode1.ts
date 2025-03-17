// 思路：中序遍历 通过哈希表记录每个节点的出现次数，然后找出出现次数最多的节点
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(n)
// 空间复杂度：栈空间 O(h) + 哈希表 O(n) + 返回值 O(n) = O(n) 
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
  if(!root) {
    return [];
  }  

  let max = 0;
  const stack: TreeNode[] = [];
  const result: Record<number, number> = {};
  while(stack.length || root) {
    while(root) {
      stack.push(root);
      root = root.left;
    }
    const node = stack.pop();
    const nextCount = (result[node.val] || 0) + 1;
    result[node.val] = nextCount;
    if(nextCount > max) {
      max = nextCount;
    }
    root = node.right;
  }

  return Object.keys(result).filter(key => result[key] === max).map(Number);
};