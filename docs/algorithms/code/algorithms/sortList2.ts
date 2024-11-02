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
    return head;
  }
  const res: number[] = [];

  let curr = head;

  while (curr) {
    res.push(curr.val);
    curr = curr.next;
  }

  res.sort((a, b) => a - b);

  const list = new ListNode(0);
  curr = new ListNode(res[0]);
  list.next = curr;

  for (let i = 1; i < res.length; i++) {
    curr.next = new ListNode(res[i]);
    curr = curr.next;
  }

  return list.next;
};