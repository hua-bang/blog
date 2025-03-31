// 思路：通过右中左的顺序遍历BST，然后累加每个节点的值，最后返回根节点
// 复杂度：时间复杂度O(n)，空间复杂度O(n)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func convertBST(root *TreeNode) *TreeNode {
	if root == nil {
		return root
	}

	count := 0;

	stack := []*TreeNode{}
	curr := root
	for curr != nil || len(stack) > 0 {
		for curr != nil {
			stack = append(stack, curr)
			curr = curr.Right
		}
		curr = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		count += curr.Val
		curr.Val = count
		curr = curr.Left
	}

	return root
}