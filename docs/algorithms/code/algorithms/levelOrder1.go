// 思路：层序遍历，每次遍历完一层，将当前层的结果加入到结果数组中
// 复杂度：时间复杂度 O(n) 需要遍历所有节点，空间复杂度 O(n) 队列中需要有一半节点
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */
func levelOrder(root *Node) [][]int {
	if root == nil {
		return [][]int{}
	}
	res := [][]int{};
	queue := []*Node{root};

	for len(queue) > 0 {
		size := len(queue);
		level := []int{};
		for i := 0; i < size; i++ {
			node := queue[0];
			queue = queue[1:];
			level = append(level, node.Val);
			queue = append(queue, node.Children...);
		}	

		res = append(res, level);
	}

	return res;
}