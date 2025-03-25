// 思路：递归，树的最小深度等于左右子树的最小深度 + 1
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(h)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	if root.Left == nil && root.Right == nil {
		return 1
	}
	if root.Left == nil {
		return minDepth(root.Right) + 1
	}
	if root.Right == nil {
		return minDepth(root.Left) + 1
	}

	left := minDepth(root.Left)
	right := minDepth(root.Right)
	if left < right {
		return left + 1
	}

	return right + 1
}