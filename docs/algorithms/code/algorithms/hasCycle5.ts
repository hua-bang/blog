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

// 思路：快慢指针，快指针每次走两步，慢指针每次走一步，如果快指针和慢指针相遇，则有环
// 时间复杂度：O(n)
// 空间复杂度：O(1)
function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let slow = head, fast = head.next;

  while (slow && fast) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next;
    fast = fast?.next?.next;
  }

  return false;
};