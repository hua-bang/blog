// 思路：通过递归判断每个节点是否符合二叉搜索树的定义
// 复杂度分析：时间复杂度O(n)，空间复杂度O(h)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func isValidBSTHelper(root *TreeNode, left int, right int) bool {
	if root == nil {
		return true
	}

	if root.Val <= left || root.Val >= right {
		return false
	}

	return isValidBSTHelper(root.Left, left, root.Val) && isValidBSTHelper(root.Right, root.Val, right)
}

func isValidBST(root *TreeNode) bool {
	if root == nil {
		return true
	}
	return isValidBSTHelper(root.Left, -1<<31-1, root.Val) && isValidBSTHelper(root.Right, root.Val, 1<<31)
}