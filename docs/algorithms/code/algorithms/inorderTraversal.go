/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func inorderTraversalHelper(root *TreeNode, arr *[]int) {
	if root == nil {
		return;
	}
	if root.Left!= nil {
		inorderTraversalHelper(root.Left, arr);
	}
	*arr = append(*arr, root.Val);
	if root.Right!= nil {
		inorderTraversalHelper(root.Right, arr);
	}
}

func inorderTraversal(root *TreeNode) []int {
	arr := make([]int, 0)

	if root == nil {
		return arr
	}
	
	inorderTraversalHelper(root, &arr)
	return arr
}