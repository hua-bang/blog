// 思路：通过递归的方式，找到插入的位置
// 递归逻辑：将当前节点的值与插入的值进行比较，如果当前节点的值大于插入的值，则将插入的值插入到当前节点的左子树中，如果当前节点的值小于插入的值，则将插入的值插入到当前节点的右子树中
// 复杂度：时间复杂度 O(logn)，空间复杂度 O(1)
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
  if(!root) {
    return new TreeNode(val);
  }

  let head = root;

  while(head) {
    if(head.val > val) {
      if(!head.left) {
        head.left = new TreeNode(val);
        break;
      }
      head = head.left;
    } else {
      if(!head.right) {
        head.right = new TreeNode(val);
        break;
      }
      head = head.right;
    } 
  }
  return root;
};