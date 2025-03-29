// 思路：先中序遍历，然后求最小值
// 复杂度：时间复杂度O(n)，空间复杂度O(n)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func getMinimumDifference(root *TreeNode) int {
	if root == nil {
		return 0
	}

	treeValue := []int{}

	stack := []*TreeNode{}
	for len(stack) > 0 || root != nil {
		for root != nil {
			stack = append(stack, root)
			root = root.Left
		}
		root = stack[len(stack)-1]
		treeValue = append(treeValue, root.Val)
		stack = stack[:len(stack)-1]
		root = root.Right
	}

	min := treeValue[1] - treeValue[0]
	for i := 2; i < len(treeValue); i++ {
		diff := treeValue[i] - treeValue[i-1]
		if diff < min  {
			min = diff
		}
	}

	return min
}