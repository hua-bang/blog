// 思路：层序遍历，每次遍历到一个节点，将该节点的 Right 指向队列中的下一个节点
// 复杂度：时间复杂度 O(n) 需要遍历所有节点，空间复杂度 O(n) 需要存储所有节点
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Left *Node
 *     Right *Node
 *     Next *Node
 * }
 */

func connect(root *Node) *Node {
	if root == nil {
		return root
	}
	queue := []*Node{root}
	for len(queue) > 0 {
		size := len(queue)
		for i := 0; i < size; i++ {
			node := queue[0]
			queue = queue[1:]
			if i < size-1 {
				node.Next = queue[0];
			}
			if node.Left != nil {
				queue = append(queue, node.Left)
			}
			if node.Right != nil {
				queue = append(queue, node.Right)
			}
		}
	}

	return root
}