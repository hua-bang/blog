// 思路：通过判断左右子树的高度差来判断是否平衡，同时也要判断左右子树是否平衡
// 复杂度：时间复杂度O(n^2), 空间复杂度O(h)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func getDepth(root *TreeNode) int {
  if root == nil {
    return 0
  }
  leftDepth := getDepth(root.Left)
  rightDepth := getDepth(root.Right)
  
	if leftDepth > rightDepth {
    return leftDepth + 1
  }

  return rightDepth + 1
}

func isBalanced(root *TreeNode) bool {
  if root == nil {
    return true
  }
  leftDepth := getDepth(root.Left)
  rightDepth := getDepth(root.Right)
	
	return math.Abs(float64(leftDepth - rightDepth)) <= 1 && isBalanced(root.Left) && isBalanced(root.Right)
}