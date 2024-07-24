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

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return null;
  }

  if (head.val === val) {
    return head.next;
  }

  let current = head.next;
  let prev = head;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
      break;
    }
    prev = current;
    current = current.next;
  }

  return head;
}
