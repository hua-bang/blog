// 思路：通过递归遍历二叉树，判断是否为左叶子节点，是则返回节点值，否则则返回其子树的左叶子节点之和
// 复杂度：时间复杂度 O(n)，空间复杂度 O(h)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func dfs(root *TreeNode, isLeft bool) int {
  if root == nil {
    return 0
  }
  if root.Left == nil && root.Right == nil && isLeft {
    return root.Val
  }

  return dfs(root.Left, true) + dfs(root.Right, false)
}

func sumOfLeftLeaves(root *TreeNode) int {
	if root == nil {
		return 0
	}

	return dfs(root.Left, true) + dfs(root.Right, false)
}