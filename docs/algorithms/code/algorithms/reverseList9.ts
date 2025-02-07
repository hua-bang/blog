// 概述：反转链表
// 思路： 用双指针 prev, curr, 
// 每次遍历： 先提取出 next，让 curr.next 指向 prev，然后 prev = curr, curr = next
// 时间复杂度 O(n)，空间复杂度 O(1)
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
function reverseList(head: ListNode | null): ListNode | null {
  if(!head) {
    return null;
  }

  let prev = null, curr = head;

  while(curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};