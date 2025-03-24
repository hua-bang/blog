// 思路：递归获取左右子树的最小深度，然后比较
// 复杂度：时间复杂度 O(n) 需要遍历所有节点，空间复杂度 O(h) 需要递归栈空间
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