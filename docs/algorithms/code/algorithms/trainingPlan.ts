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

function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
  let fast: ListNode | null = head,
    slow: ListNode = head;

  while (cnt) {
    fast = fast.next;
    cnt--;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
}
