// 思路：通过递归的方式，比较左右子树，然后递归比较左右子树的左右子树，直到叶子节点
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(h)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func isSymmetricHelper(left *TreeNode, right * TreeNode) bool {
	if left == nil && right == nil {
		return true
	}
	if left == nil || right == nil {
		return false
	}
	return left.Val == right.Val && isSymmetricHelper(left.Left, right.Right) && isSymmetricHelper(left.Right, right.Left)
}

func isSymmetric(root *TreeNode) bool {
	if root == nil {
		return true
	}

	return isSymmetricHelper(root.Left, root.Right)
}