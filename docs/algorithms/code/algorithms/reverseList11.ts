// 思路：使用 prev, curr 两个指针，prev 指向 null，curr 指向 head，然后遍历链表，将 curr 的 next 指向 prev，然后 prev 指向 curr，curr 指向 next，直到 curr 指向 null，返回 prev 即可
// 复杂度分析：时间复杂度O(n)，空间复杂度O(1)
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
    return head;
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