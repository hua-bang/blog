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

function reverseBookList(head: ListNode | null): number[] {
  const res: number[] = [];

  while (head) {
    res.unshift(head.val);
    head = head.next;
  }

  return res;
}

function reverseBookList2(head: ListNode | null): number[] {
  let newHead: ListNode | null = null;

  while (head) {
    const temp = newHead;
    newHead = new ListNode(head.val);
    newHead.next = temp;
    head = head.next;
  }

  const res: number[] = [];

  while (newHead) {
    res.push(newHead.val);
    newHead = newHead.next;
  }

  return res;
}
