// 思路：二叉树的公共祖先，思路是递归，先判断root是否为空，如果为空，返回nil，如果root等于p或者q，返回root，然后递归左右子树，如果左右子树都不为空，返回root，如果左子树不为空，返回左子树，如果右子树不为空，返回右子树，如果都为空，返回nil
// 复杂度分析：时间复杂度O(n)，空间复杂度O(h)
// 
// 
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
  if root == nil {
    return nil;
  }

  if root == p || root == q {
    return root;
  }

  leftNode := lowestCommonAncestor(root.Left, p, q);
  rightNode := lowestCommonAncestor(root.Right, p, q);

  if leftNode != nil && rightNode != nil {
    return root;
  }

  if leftNode != nil {
    return leftNode;
  }

  return rightNode;
}