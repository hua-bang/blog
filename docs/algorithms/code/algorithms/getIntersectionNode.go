// 思路：如果有交点，则相遇的时候，一定走的路程是一样多的，否则都为 null
// 复杂度分析：时间复杂度 O(m+n)，空间复杂度 O(1)
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

	pa, pb := headA, headB

	for pa != pb {
		if(pa == nil) {
			pa = headB
		} else {
			pa = pa.Next
		}

		if(pb == nil) {
			pb = headA
		} else {
			pb = pb.Next
		}
	}

	return pa;
}