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

// 概述：反转链表
// 思路：遍历链表，将当前节点的 next 指向前一个节点，然后将前一个节点指向当前节点，然后将当前节点指向后续节点。

function reverseList(head: ListNode | null): ListNode | null {
  if(!head) {
    return null;
  }

  let prev = null, curr = head;
  while(curr) {
    // 先保留后续的 next 节点
    const nextNode = curr.next;
    // 当前的 next 得指向前一个，表示反转
    curr.next = prev;
    // prev 指向当前节点
    prev = curr;
    // curr 指向后续节点
    curr = nextNode;
  }

  return prev;
};