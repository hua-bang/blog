// 思路：通过递归的方式，交换左右子树，然后递归交换左右子树的左右子树，直到叶子节点
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(h)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}

	temp := root.Left
	root.Left = invertTree(root.Right)
	root.Right = invertTree(temp)
	return root
}