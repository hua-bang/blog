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
  const res: number[] = [];

  while (head) {
    res.push(head.val);
    head = head.next;
  }

  let left = 0,
    right = res.length - 1;
  while (left < right) {
    if (res[left] !== res[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
