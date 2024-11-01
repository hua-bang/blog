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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let plusOne = false;

  const res: number[] = [];

  while (l1 || l2) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;

    const nextVal = l1Val + l2Val + (plusOne ? 1 : 0);
    plusOne = nextVal >= 10 ? true : false;
    res.push(nextVal % 10);
    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (plusOne) {
    res.push(1);
  }

  const listNode = new ListNode(0);

  listNode.next = new ListNode(res[0]);

  let curr = listNode.next;

  for (let i = 1; i < res.length; i++) {
    curr.next = new ListNode(res[i]);
    curr = curr.next;
  }

  return listNode.next;
};