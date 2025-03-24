// 思路：层序遍历，每次遍历完一层，将当前层的结果加和的平均值加入到结果数组中
// 复杂度：时间复杂度 O(n) 需要遍历所有节点，空间复杂度 O(n) 队列中需要有一半节点
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func averageOfLevels(root *TreeNode) []float64 {
	if root == nil {
		return []float64{}
	}

	res := []float64{};
	queue := []*TreeNode{root};

	for len(queue) > 0 {
		size := len(queue);
		sum := 0;
		for i := 0; i < size; i++ {
			node := queue[0];
			queue = queue[1:];
			sum += node.Val;

			if node.Left != nil {
				queue = append(queue, node.Left);
			}

			if node.Right!= nil {
				queue = append(queue, node.Right);
			}
		}
		res = append(res, float64(sum) / float64(size));
	}

	return res;
}