// 思路：通过递归的方式，构建树，构建左，右子树
// 复杂度分析：时间复杂度 O(n²)，空间复杂度 O(n)
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length) {
    return null;
  }

  const rootVal = postorder[postorder.length - 1];
  const rootNode = new TreeNode(rootVal);

  const rootIndexInOrder = inorder.findIndex(item => item === rootVal);

  rootNode.left = buildTree(
    inorder.slice(0, rootIndexInOrder),
    postorder.slice(0, rootIndexInOrder)
  );
  rootNode.right = buildTree(
    inorder.slice(rootIndexInOrder + 1),
    postorder.slice(rootIndexInOrder, postorder.length - 1)
  );

  return rootNode;
};