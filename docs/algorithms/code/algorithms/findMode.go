// 思路：遍历二叉树，用哈希表记录每个节点的值出现的次数，然后遍历哈希表，找到出现次数最多的节点的值，返回
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(n)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func findMode(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	max := 0
	hash := map[int]int{}
	stack := []*TreeNode{}
	for len(stack) > 0 || root != nil {
		for root != nil {
			stack = append(stack, root)
			root = root.Left
		}
		root = stack[len(stack)-1]
		stack = stack[:len(stack)-1]
		hash[root.Val]++
		if hash[root.Val] > max {
			max = hash[root.Val]
		}
    root = root.Right
	}
	res := []int{}
	for k, v := range hash {
		if v == max {
			res = append(res, k)
		}
	}
	return res
}