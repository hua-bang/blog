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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let a = headA, b = headB;
  let hasAChange = false, hasBChange = false;

  while (a && b) {
    if (a === b) {
      return a;
    }

    if (a.next) {
      a = a.next;
    } else {
      a = hasAChange ? null : headB;
      if (!hasAChange) {
        hasAChange = true;
      }
    }

    if (b.next) {
      b = b.next;
    } else {
      b = hasBChange ? null : headA;
      if (!hasBChange) {
        hasBChange = true;
      }
    }
  }

  return null;
};