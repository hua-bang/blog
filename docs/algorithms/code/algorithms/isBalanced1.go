// 概述：给定一个二叉树，判断它是否是高度平衡的二叉树。
// 思路：判断左右子树高度差是否大于1，如果大于1， 则返回深度 - 1, 否则返回深度 + 1
// 复杂度：时间复杂度 O(n)，空间复杂度 O(h)
func checkHeight(root *TreeNode) int {
	if root == nil {
		return 0
	}
	leftHeight := checkHeight(root.Left)
	if leftHeight == -1 {
		return -1
	}
	rightHeight := checkHeight(root.Right)
	if rightHeight == -1 {
		return -1
	}
	heightDiff := leftHeight - rightHeight
	if math.Abs(float64(heightDiff)) > 1 {
		return -1
	}
	
	if leftHeight > rightHeight {
		return leftHeight + 1
	}

	return rightHeight + 1
}

func isBalanced(root *TreeNode) bool {
	return checkHeight(root) != -1
}