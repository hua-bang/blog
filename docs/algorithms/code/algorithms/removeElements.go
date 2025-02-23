// 思路：使用双指针，prev指向当前节点的前一个节点，curr指向当前节点
// 复杂度分析：时间复杂度 O(n)，空间复杂度 O(1)
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeElements(head *ListNode, val int) *ListNode {
    if head == nil {
        return head
    }

    tempNode := ListNode{ Val: 0 }
    tempNode.Next = head

    prev, curr := &tempNode, head

    for curr != nil {
        if curr.Val != val {
            prev = curr
            curr = curr.Next
        } else {
            prev.Next = curr.Next
            curr = curr.Next
        }
    }

    return tempNode.Next
}