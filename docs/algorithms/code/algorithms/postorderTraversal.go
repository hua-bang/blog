/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */


func postorderTraversalHelper(root *TreeNode, arr *[]int) {
	if root == nil {
		return;
	}
	if root.Left!= nil {
		postorderTraversalHelper(root.Left, arr);
	}
	if root.Right!= nil {
		postorderTraversalHelper(root.Right, arr);
	}
	*arr = append(*arr, root.Val);
}	

func postorderTraversal(root *TreeNode) []int {
	arr := []int{};

	if root == nil {
		return arr;
	}

	postorderTraversalHelper(root, &arr);
	return arr;
}