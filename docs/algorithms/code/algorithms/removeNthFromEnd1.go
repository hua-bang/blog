// 思路：使用快慢指针，快指针先走n步，然后快慢指针一起走，当快指针走到头时，慢指针走到了倒数第n个节点
// 注意：这里的慢指针，需要一个临时节点，因为头节点可能会被删除，所以需要一个临时节点来指向头节点
// 复杂度分析：时间复杂度O(n)，空间复杂度O(1)
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	if head == nil {
		return nil
	}

	fast := head;
	for i := 0; i < n; i++ {
		fast = fast.Next;
	}

	if fast == nil {
		return head.Next;
	}

	tempNode := ListNode{
		Val: 0,
		Next: head,
	}

	slow := &tempNode;

	for fast != nil {
		fast = fast.Next;
		slow = slow.Next;
	}

	slow.Next = slow.Next.Next;

	return tempNode.Next;
}