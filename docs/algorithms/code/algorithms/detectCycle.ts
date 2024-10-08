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

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const map = new Map<ListNode, boolean>();

  while (head) {
    if (map.has(head)) {
      return head;
    }
    map.set(head, true);
    head = head.next;
  }

  return null;
}
