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

function isPalindrome(head: ListNode | null): boolean {
  let prev = null, curr = head;

  while(curr) {
    (curr as any).prev = prev;
    prev = curr;
    curr = curr.next;
  }

  while(head && prev) {
    if(head.val  !== prev.val) {
      return false;
    }

    head = head.next;
    prev = (prev as any).prev;
  }

  return true;
};