// 思路：最大深度就是左右子树的最大深度加1
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(h)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	left := maxDepth(root.Left)
	right := maxDepth(root.Right)
	if left > right {
		return left + 1
	}
	return right + 1
}