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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const newHead = new ListNode(0);
  newHead.next = head;

  let curr = newHead.next,
    prev = newHead;

  while (curr) {
    const first = curr;
    const second = curr.next;
    if (first && second) {
      const temp = second.next;
      second.next = first;
      first.next = temp;
      prev.next = second;

      curr = temp;
      prev = first;
    } else {
      curr = null;
    }
  }

  return newHead.next;
}
