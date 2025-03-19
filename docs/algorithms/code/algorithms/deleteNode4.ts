// 思路：先通过判断 node 的大小和二叉搜索树的性质来找到要删除的节点
// - 如果节点是叶子节点，直接删除
// - 如果节点有一个子节点，直接将子节点替换当前节点
// - 如果节点有两个子节点，需要找到右子树中最小的节点来替换当前节点，然后再删除这个最小节点
// 复杂度分析: 时间复杂度 O(logN) 空间复杂度 O(logN)
//
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

  let node = root;

  if(node.val > key) {
    // 如果 node.val > key 说明 key 应该在 node 的左子树中  
    root.left = deleteNode(root.left, key);
  } else if(node.val < key) {
    // 如果 node.val < key 说明 key 应该在 node 的右子树中
    root.right = deleteNode(root.right, key);
  } else {
    // 叶子节点情况
    if(!root.left && !root.right) {
      return null;
    }
    // 只有右节点的情况
    if(!root.left) {
      return root.right;
    }
    // 只有左节点的情况
    if(!root.right) {
      return root.left;
    }

    // 有左右节点的情况，需要找到右子树中最小的节点来替换当前节点，然后再删除这个最小节点
    const minNode = findMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  }
  return root;
};

function findMin(root: TreeNode | null) {
  let node = root;
  while(node.left) {
    node = node.left;
  }
  return node;
}