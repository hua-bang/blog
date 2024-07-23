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
  let newHead: ListNode | null = null;

  while (head) {
    const prev = newHead;
    newHead = new ListNode(head.val);
    newHead.next = prev;
    head = head.next;
  }

  return newHead;
}

function trainningPlan(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
