/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func inorderTraversalHelper(root *TreeNode, res *[]int) {
	if root == nil {
		return;
	}

	if root.Left != nil {
		inorderTraversalHelper(root.Left, res);
	}

	*res = append(*res, root.Val);

	if root.Right != nil {
		inorderTraversalHelper(root.Right, res);
	}

}

func inorderTraversal(root *TreeNode) []int {
  res := []int{};
	
	inorderTraversalHelper(root, &res);
	return res;
}