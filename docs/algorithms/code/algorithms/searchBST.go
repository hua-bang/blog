// 思路：根据二叉搜索树的性质，左子树的所有节点都小于根节点，右子树的所有节点都大于根节点
// 所以我们可以从根节点开始，比较当前节点的值和目标值的大小，如果当前节点的值大于目标值，那么目标值一定在当前节点的左子树中，否则目标值一定在当前节点的右子树中
// 复杂度分析：时间复杂度 O(logn)，空间复杂度 O(1)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func searchBST(root *TreeNode, val int) *TreeNode {
	if root == nil {
		return nil
	}

	curr := root
	for curr != nil {
		if curr.Val == val {
			return curr
		} else if curr.Val > val {
			curr = curr.Left
		} else {
			curr = curr.Right
		}
	}

	return nil
}