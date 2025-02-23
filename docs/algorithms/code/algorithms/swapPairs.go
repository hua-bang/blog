// 思路：每次看 curr.Next 有没有值，有的话就交换，没有的话就返回
// 交换：prev -> curr/first -> second -> third 变成 second -> first/prev -> third/curr
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1)
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
	if head == nil {
		return head
	}
	tempNode := ListNode{ Val: 0, Next: head }

	prev, curr := &tempNode, head

	for curr != nil && curr.Next != nil {
		// prev -> curr/first -> second -> third
		first, second, third := curr, curr.Next, curr.Next.Next

		// prev -> second/curr -> first -> third
		prev.Next = second
		second.Next = first
		first.Next = third

		// second -> first/prev -> third/curr
		prev = first
		curr = third
	}

	return tempNode.Next
}