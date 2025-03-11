/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func postorderTraversal(root *TreeNode) []int {
	res := make([]int, 0)
	stack := make([]*TreeNode, 0)
	for root != nil || len(stack) > 0 {
		for root != nil {
			res = append([]int{root.Val}, res...)
			stack = append(stack, root)
			root = root.Right
		}
		root = stack[len(stack)-1].Left
		stack = stack[:len(stack)-1]
	}
	return res
}