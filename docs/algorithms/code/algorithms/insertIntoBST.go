// 思路：从根节点开始遍历，如果当前节点为空，就返回新节点，如果当前节点不为空，就比较当前节点和新节点的大小，如果新节点小，就递归调用当前节点的左子树，如果新节点大，就递归调用当前节点的右子树。
// 复杂度分析：时间复杂度 O(h), 空间复杂度 O(1)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func insertIntoBST(root *TreeNode, val int) *TreeNode {
	if root == nil {
		return &TreeNode{Val: val}
	}

	curr := root
	for curr != nil {
		if val < curr.Val {
			if curr.Left == nil {
				curr.Left = &TreeNode{Val: val}
				break
			} else {
				curr = curr.Left
			}
		} else {
			if curr.Right == nil {
				curr.Right = &TreeNode{Val: val}
				break
			} else {
				curr = curr.Right
			}
		}
	}

	return root
}