/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func preorderTraversalHelper(root *TreeNode, arr *[]int) {
	if root == nil {
		return;
	}

	*arr = append(*arr, root.Val);

	if root.Left != nil {
		preorderTraversalHelper(root.Left, arr);
	}
	if root.Right != nil {
		preorderTraversalHelper(root.Right, arr);
	}
}
 
func preorderTraversal(root *TreeNode) []int {
	arr := []int{};
 
	if root == nil {
		return arr;
	}
 
	preorderTraversalHelper(root, &arr);
	return arr;
}