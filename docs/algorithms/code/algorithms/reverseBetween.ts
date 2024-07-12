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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  const tempNode = new ListNode(-1);
  tempNode.next = head;
  let pre = tempNode;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }

  let cur = pre.next;

  for (let i = 0; i < right - left; ++i) {
    const next = cur.next;
    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }

  return tempNode.next;
}
