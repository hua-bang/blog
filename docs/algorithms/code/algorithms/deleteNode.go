// 思路：通过递归的方式，找到要删除的节点，然后删除，有下方三种情况
// 1. 要删除的节点没有子节点，直接删除
// 2. 要删除的节点只有一个子节点，直接删除，然后把子节点放到要删除的节点的位置
// 3. 要删除的节点有两个子节点，找到右子树中最小的节点，然后把最小的节点放到要删除的节点的位置，然后删除最小的节点
// 复杂度分析：时间复杂度 O(logn)，空间复杂度 O(logn)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func deleteNode(root *TreeNode, key int) *TreeNode {
	if root == nil {
		return root
	}
	curr := root
	
	if key < curr.Val {
		curr.Left = deleteNode(curr.Left, key)
	} else if key > curr.Val {
		curr.Right = deleteNode(curr.Right, key)
	} else {
		if curr.Left == nil && curr.Right == nil  {
			return nil
		}
		if curr.Left == nil {
			return curr.Right
		}
		if curr.Right == nil {
			return curr.Left
		}

		minNode := findMin(curr.Right)
		curr.Val = minNode.Val
		curr.Right = deleteNode(curr.Right, minNode.Val)
	}

	return curr
}

func findMin(root *TreeNode) *TreeNode {
	curr := root
	for curr.Left != nil {
		curr = curr.Left
	}
	return curr
}