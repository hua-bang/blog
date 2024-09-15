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

function trainningPlan(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let prev = null;

  while (head) {
    const curr = head;
    head = head.next;
    curr.next = prev;
    prev = curr;
  }

  return prev;
}
