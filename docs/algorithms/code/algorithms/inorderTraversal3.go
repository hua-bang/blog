/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func inorderTraversal(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}
	stack := []*TreeNode{}
	res := []int{};

	for len(stack) > 0 || root != nil {
		for root != nil {
			stack = append(stack, root);
			root = root.Left;
		}

		root = stack[len(stack)-1];
		stack = stack[:len(stack)-1];
		res = append(res, root.Val);
		root = root.Right;
	}
	return res;
}