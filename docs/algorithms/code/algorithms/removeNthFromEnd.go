// 思路： 快慢指针，快指针先走 n 步，然后快慢指针一起走，直到快指针走到头，然后慢指针的下一个节点就是要删除的节点
// 特殊处理：所以我们把慢指针指向一个虚拟头节点，这样就可以处理删除头节点的情况
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1)
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
  if head == nil {
		return head
	}  

	fast := head;
	tempNode := ListNode{ Val: 0, Next: head }
	slow := &tempNode;

	for i:=0; i<n; i++ {
		fast = fast.Next;
	}

	if fast == nil {
		return head.Next;
	}

	for fast != nil {
		fast = fast.Next;
		slow = slow.Next;
	}

	slow.Next = slow.Next.Next;

	return tempNode.Next;
}