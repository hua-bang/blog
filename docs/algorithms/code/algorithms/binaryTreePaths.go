// 思路：通过深度优先遍历，记录路径
// 复杂度分析：时间复杂度O(n)，空间复杂度O(h)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func dfs(root *TreeNode, path string, res *[]string) {
	if root == nil {
		return;
	}
	if path == "" {
		path = strconv.Itoa(root.Val)
	} else {
		path = path + "->" + strconv.Itoa(root.Val)
	}

	if root.Left == nil && root.Right == nil {
		*res = append(*res, path)
	}
	dfs(root.Left, path, res)
	dfs(root.Right, path, res)
}

func binaryTreePaths(root *TreeNode) []string {
	if root == nil {
		return []string{}
	}
	res := []string{}
	dfs(root, "", &res)
	return res
}