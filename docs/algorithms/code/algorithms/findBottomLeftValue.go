// 思路：层序遍历，最后一层第一个节点
// 复杂度：时间复杂度 O(n)，空间复杂度 O(n)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func findBottomLeftValue(root *TreeNode) int {
	if root == nil {
		return 0
	}

	stack := []*TreeNode{root}
	res := 0;
	for len(stack) > 0 {
		size := len(stack)
		res = stack[0].Val
		for i := 0; i < size; i++ {
			node := stack[0]
			stack = stack[1:]
			if node.Left != nil {
				stack = append(stack, node.Left)
			}
			if node.Right != nil {
				stack = append(stack, node.Right)
			}
		}
	}
	return res
}