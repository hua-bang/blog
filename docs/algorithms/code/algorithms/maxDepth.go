// 思路：通过递归的方式，获取左右子树的最大深度，然后比较左右子树的最大深度，返回较大的深度
// 复杂度：时间复杂度 O(n) 需要遍历所有节点，空间复杂度 O(h) 递归栈的深度
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