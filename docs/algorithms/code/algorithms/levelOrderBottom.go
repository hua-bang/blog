// 思路：层序遍历，每次遍历完一层，将当前层的结果插入到结果数组的头部
// 复杂度：时间复杂度 O(n) 需要遍历所有节点，空间复杂度 O(n) 需要存储所有节点
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrderBottom(root *TreeNode) [][]int {
  if root == nil {
    return [][]int{};
  }
	
	res := [][]int{};
	queue := []*TreeNode{root};

	for len(queue) > 0 {
		size := len(queue);
		level := []int{};
		for i:=0; i < size; i++ {
			node := queue[0];
			queue = queue[1:];
			level = append(level, node.Val);

			if node.Left != nil {
				queue = append(queue, node.Left);
			}
			if node.Right != nil {
				queue = append(queue, node.Right);
			}
		}
		res = append([][]int{level}, res...);
	}

	return res;
}