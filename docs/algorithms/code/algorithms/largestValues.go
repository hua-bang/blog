// 思路：层序遍历，每一层获取中位数再塞进去
// 复杂度分析：时间复杂度 O(n), 空间复杂度 O(n)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func largestValues(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	res := []int{};
	queue := []*TreeNode{root};
	for len(queue) > 0 {
		size := len(queue);
		max := queue[0].Val;
		for i := 0; i < size; i++ {
			node := queue[0];
			queue = queue[1:];
			if node.Val > max {
				max = node.Val;
			}
			if node.Left != nil {
				queue = append(queue, node.Left);
			}
			if node.Right != nil {
				queue = append(queue, node.Right);
			}
		}
		res = append(res, max);
	}
	return res;
}