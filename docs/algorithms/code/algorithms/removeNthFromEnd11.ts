// 思路：采用快慢指针，快指针先走n步，然后快慢指针一起走，直到快指针走到链表的末尾，此时慢指针指向的节点就是倒数第n个节点，将其删除即可
// 注意：这里我们将慢指针指向的节点的前一个节点，这样我们就可以删除慢指针指向的节点了
// 复杂度分析：时间复杂度O(n)，空间复杂度O(1)
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return null;
  }

  let fast = head;
  while (n--) {
    fast = fast.next;
  }

  if (fast === null) {
    return head.next;
  }

  const tempNode = new ListNode(0, head);
  tempNode.next = head;
  let slow = tempNode;
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return tempNode.next;
};