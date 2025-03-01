// 思路：使用两个指针，都走 headA 和 headB，当走到头时，将指针指向另一个链表的头，当两个指针相遇时，即为相交节点
// 复杂度分析：时间复杂度O(m+n)，空间复杂度O(1)
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	if headA == nil || headB == nil {
		return nil
	}

	pa, pb := headA, headB;

	for pa != pb {
		if pa == nil {
			pa = headB;
		} else {
			pa = pa.Next;
		}

		if pb == nil {
			pb = headA;
		} else {
			pb = pb.Next;
		}
	}

	return pa
}