// 思路：每次遍历找到 prev, curr, 然后将 curr.Next 指向 prev
// 复杂度分析：时间复杂度O(n)，空间复杂度O(1)
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
	if head == nil {
		return nil
	}

	var prev *ListNode;
	curr := head;

	for curr != nil {
		next := curr.Next;
		curr.Next = prev;
		prev = curr;
		curr = next;
	}

	return prev
}