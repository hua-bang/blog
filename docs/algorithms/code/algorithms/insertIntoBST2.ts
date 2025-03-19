// 思路：从根节点开始遍历，判断值的大小，然后判断是走左子树还是右子树，如果这个时候节点刚好缺左/右子树，那么直接在这个节点的左/右子树插入节点
// 复杂度：时间复杂度 O(h), 空间复杂度 O(1)
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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return new TreeNode(val);
  }   
  
  let node = root;

  while(node) {
    if(node.val > val) {
      if(!node.left) {
        node.left = new TreeNode(val);
        break;
      }
      node = node.left;
    } else {
      if(!node.right) {
        node.right = new TreeNode(val);
        break
      }
      node = node.right;
    }
  }

  return root;
};