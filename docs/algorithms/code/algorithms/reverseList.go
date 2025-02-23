// 思路：双指针处理，将当前j节点的Next指向前一个节点
// 复杂度分析：时间复杂度O(n)，空间复杂度O(1)
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
	if(head == nil) {
		return head;
	}

	var prev *ListNode = nil;
	curr := head;

	for curr != nil {
		next := curr.Next;
		curr.Next = prev;
		prev = curr;
		curr = next;
	}

	return prev;
}