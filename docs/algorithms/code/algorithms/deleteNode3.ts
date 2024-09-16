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

  let prev: ListNode | null,
    curr: ListNode | null = head;

  while (curr.val !== val) {
    prev = curr;
    curr = curr.next;
  }

  prev.next = curr.next;

  return head;
}
