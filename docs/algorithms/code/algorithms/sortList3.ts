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

function sortList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const res: number[] = [];

  let curr = head;
  while (curr) {
    res.push(curr.val);
    curr = curr.next;
  }

  res.sort((a, b) => a - b);

  let newHead = new ListNode(0);
  newHead.next = new ListNode(res[0]);
  curr = newHead.next;

  for (let i = 1; i < res.length; i++) {
    curr.next = new ListNode(res[i]);
    curr = curr.next;
  }

  return newHead.next;
};