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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if(!root) {
    return null;
  }

  if(root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if(root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if(!root.left) {
      return root.right
    }

    if(!root.right) {
      return root.left;
    }

    const minNode = findMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  }

  return root;
};

function findMin(node: TreeNode): TreeNode {
  let currentNode = node;
  while(currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode;
}
// 思路：递归删除BST节点，分三种情况：叶子节点、单子节点、双子节点
// 复杂度分析：时间复杂度O(logn)，空间复杂度O(logn)