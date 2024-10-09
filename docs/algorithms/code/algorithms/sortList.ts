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
  const res: number[] = [];

  let curr = head;
  while (curr) {
    res.push(curr.val);
    curr = curr.next;
  }

  res.sort((a, b) => a - b);

  let newList = new ListNode(0);
  curr = newList;

  for (let i = 0; i < res.length; i++) {
    curr.next = new ListNode(res[i]);
    curr = curr.next;
  }

  return newList.next;
}
