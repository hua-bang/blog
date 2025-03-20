/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

 func preorderTraversalHelper(root *TreeNode, res *[]int) {
	if root == nil {
		return;
	}

	*res = append(*res, root.Val);
	if root.Left != nil {
		preorderTraversalHelper(root.Left, res);
	}

	if root.Right!= nil {
		preorderTraversalHelper(root.Right, res);
	}
}

func preorderTraversal(root *TreeNode) []int {
  res := []int{}
  preorderTraversalHelper(root, &res)
	return res
}