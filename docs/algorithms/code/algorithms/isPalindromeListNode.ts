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
  if (head === null || head.next === null) {
    return true;
  }

  const res: number[] = [];

  while (head) {
    res.push(head.val);
    head = head.next;
  }

  const n = res.length;

  for (let i = 0; i < n; i++) {
    if (res[i] !== res[n - 1 - i]) {
      return false;
    }
  }

  return true;
}
