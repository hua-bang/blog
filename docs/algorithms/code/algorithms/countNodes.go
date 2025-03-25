/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func countNodes(root *TreeNode) int {
	if root == nil {
		return 0
	}

	leftDepth, rightDepth := 0, 0
	leftNode, rightNode := root.Left, root.Right
	for leftNode != nil {
		leftNode = leftNode.Left
		leftDepth++
	}
	for rightNode != nil {
		rightNode = rightNode.Right
		rightDepth++
	}
	if leftDepth == rightDepth {
		return 2 << leftDepth - 1
	}
	return countNodes(root.Left) + countNodes(root.Right) + 1
}