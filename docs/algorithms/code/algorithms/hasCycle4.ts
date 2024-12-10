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

function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let fast: ListNode | null = head.next;
  let slow: ListNode | null = head;

  while (fast && slow) {
    if (fast === slow) {
      return true;
    }

    fast = fast?.next?.next;
    slow = slow?.next;
  }

  return false;
};