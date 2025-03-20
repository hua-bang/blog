/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func postorderTraversalHelper(root *TreeNode, res *[]int) {
	if root == nil {
		return;
	}
	
	if root.Left!= nil {
		postorderTraversalHelper(root.Left, res);
	}
	if root.Right!= nil {
		postorderTraversalHelper(root.Right, res);
	}
	*res = append(*res, root.Val);
}

func postorderTraversal(root *TreeNode) []int {
	res := make([]int, 0)
	postorderTraversalHelper(root, &res)
	return res
}