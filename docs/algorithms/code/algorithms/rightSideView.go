// 思路：层序遍历，每次遍历完一层，将当前层的最后一个节点的值加入到结果数组中
// 复杂度：时间复杂度 O(n) 需要遍历所有节点，空间复杂度 O(n) 队列遍历过程中需要存储最多 n/2 个节点，所以空间复杂度为 O(n)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func rightSideView(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}

	res := []int{};
	queue := []*TreeNode{root};

	for len(queue) > 0 {
		size := len(queue);

		for i := 0; i < size; i++ {
			node := queue[0];
			queue = queue[1:];

			if i == size-1 {
				res = append(res, node.Val);
			}

			if node.Left != nil {
				queue = append(queue, node.Left);
			}

			if node.Right != nil {
				queue = append(queue, node.Right);
			}
		}
	}
	return res;
}